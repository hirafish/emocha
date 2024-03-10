# set async_mode to 'threading', 'eventlet', 'gevent' or 'gevent_uwsgi' to
# force a mode else, the best mode is selected automatically from what's
# installed
async_mode = None

from flask import Flask, render_template
import socketio

sio = socketio.Server(async_mode=async_mode,cors_allowed_origins='http://localhost:3000')
app = Flask(__name__)
app.wsgi_app = socketio.WSGIApp(sio, app.wsgi_app)


@app.route('/')
def index():
    return "This is the backend server for the chat app."


@sio.event
def connect(sid, environ, auth):
    print(f'connected auth={auth} sid={sid}')
    sio.emit('hello', (1, 2, {'hello': 'you'}), to=sid)


@sio.event
def disconnect(sid):
    print('disconnected', sid)

@sio.event
def send_message(sid, message):
    print(f"message: {message}")
    sio.emit('message', message, to=sid)


if __name__ == '__main__':
    if sio.async_mode == 'threading':
        # deploy with Werkzeug
        app.run(threaded=True,debug=True, host='0.0.0.0', port=8000)
    elif sio.async_mode == 'eventlet':
        # deploy with eventlet
        import eventlet
        import eventlet.wsgi
        eventlet.wsgi.server(eventlet.listen(('', 5000)), app)
    elif sio.async_mode == 'gevent':
        # deploy with gevent
        from gevent import pywsgi
        try:
            from geventwebsocket.handler import WebSocketHandler
            websocket = True
        except ImportError:
            websocket = False
        if websocket:
            pywsgi.WSGIServer(('', 5000), app,
                              handler_class=WebSocketHandler).serve_forever()
        else:
            pywsgi.WSGIServer(('', 5000), app).serve_forever()
    elif sio.async_mode == 'gevent_uwsgi':
        print('Start the application through the uwsgi server. Example:')
        print('uwsgi --http :5000 --gevent 1000 --http-websockets --master '
              '--wsgi-file latency.py --callable app')
    else:
        print('Unknown async_mode: ' + sio.async_mode)