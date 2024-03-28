<div align="center">
    <h1 align="center">emocha</h1>
    <p>Let's start an emoji-only chat !</p>
    <p>
        <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=javascript,tailwind,react,nodejs,docker,firebase,vercel&theme=light" />
        </a>
    </p>
    <p><a href="https://emocha-slet.vercel.app/">View Demo</a></p>
    <img width="800" alt="スクリーンショット 2024-03-28 18 16 27" src="https://github.com/hirafish/emocha/assets/103473179/f1a0d1bc-bf0e-492c-8296-0c46040662e1">
</div>

## 📖 Docs

- [💻 Architecture Overview](#architectureoverview)
- [🔧 Setup](#setup)
- [🚀 Quick Start](#quickstart)
- [👻 Usage](#usage)
- [👀 Frontend README (Quick start, File Structure Overview, and Data Structure)](frontend/README.md)

<h2 id="architectureoverview">💻 Architecture Overview</h2>

![architecture overview](https://github.com/hirafish/emocha/assets/103473179/948f3adc-1d38-4100-80a0-ff3a778b8dad)

<h2 id="setup">🔧 Setup</h2>

### docker
* Docker version 25.0.3
* Docker Compose version v2.24.5-desktop.1

### .env
```
cd backend/
touch .env
```

```
DB_USERNAME="obake"
DB_PASSWORD="obake"
DB_HOST="database"
DB_PORT="5432"
DB_DATABASE_NAME="emocha_db"
```
（↑環境変数はdocker-composeで定義しているものを使用）

<h2 id="quickstart">🚀 Quick Start</h2>

1. dockerコンテナを構築・起動する（２回目以降は`--build`なし）
    ```
    docker compose up --build
    ```
    バックグラウンドで実行するときは
    ```
    docker compose up -d --build
    ```

2. backendコンテナに入る
    ```
    docker compose exec backend sh
    ```

3. fastAPIを起動する

    backendコンテナ内で
    ```
    uvicorn app:app --host=0.0.0.0 --reload
    ```

4. frontendコンテナに入る
    ```
    docker compose exec frontend sh
    ```
5. パッケージのインストール

    frontendコンテナ内で
    ```
    npm install
    ```

6. Reactを起動する

    frontendコンテナ内で
    ```
    npm start
    ```


<h2 id="usage">👻 Usage</h2>

### docker copmose
* dockerコンテナを構築・起動する
    ```
    docker compose up --build
    ```
    バックグラウンドで実行するときは
    ```
    docker compose up -d --build
    ```
* 2回目以降は起動のみで使える
    ```
    docker compose up -d
    ```

### backend server
* backendコンテナに入る
    ```
    docker compose exec backend sh
    ```
* fastAPIを起動する

    backendコンテナ内で
    ```
    uvicorn app:app --host=0.0.0.0 --reload
    ```
    * ホストマシン上：http://localhost:8000/
    * コンテナ内：http://backend:8000/

* データベースとの接続を確認する

    backendコンテナ内で
    ```
    python con_db.py
    ```

* backendコンテナから抜ける
    ```
    exit
    ```

### frontend server
* frontendコンテナに入る
    ```
    docker compose exec frontend sh
    ```
* パッケージのインストール

    frontendコンテナ内で
    ```
    npm install
    ```

* Reactを起動する

    frontendコンテナ内で
    ```
    npm start
    ```

* frontendコンテナから抜ける
    ```
    exit
    ```

### database server (PostgreSQL)
* databaseコンテナに入る
    ```
    docker exec -it database bash
    ```

* PostgreSQLにアクセスする

    databaseコンテナ内で
    ```
    psql -U obake
    ```

#### PostgreSQLの操作
* データベース一覧を表示する
    ```
    \list
    ```
    仮データベース：「emocha_db」

* データベースに入る
    ```
    \connect データベース名
    ```

* テーブル一覧を表示する
    任意のデータベース内で
    ```
    \dt
    ```

* PostgreSQLから抜ける
    ```
    \q
    ```

* databaseコンテナから抜ける
    ```
    exit
    ```

### Socket io 通信
#### backend
1. backendコンテナに入る
2. backendコンテナ内で
    ```
    python socket_io.py
    ```
#### frontend
1. frontendコンテナに入る
2. `./frontend/src/App.js`の即時関数をコメントアウトする
    ```
    // (async()=>{
    //   try{
    //   const data=await fetchFromPython();
    //   console.log(data);
    //   }catch(error){
    //     console.log("(Fetch Error)",error);
    //   };
    // })();
    ```
3. frontendコンテナ内で
    ```
    npm install socket.io-client@4.7.4
    npm start
    ```

#
Made with ❤️ and りんごらてオバケ🍏☕👻
