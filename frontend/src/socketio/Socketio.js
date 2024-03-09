import { io } from "socket.io-client";

export const ConnectSocketIo= ()=>{
    const port = process.env.PORT || 8000;
    const socket = io('http://localhost:' + port, {auth: {token: 'my-token'}});

    socket.on('connect', () => {
    console.log(`connect ${socket.id}`);
    });

    socket.on('disconnect', () => {
    console.log(`disconnect ${socket.id}`);
    });

    socket.on('hello', (a, b, c) => {
    console.log(a, b, c);
    });
};