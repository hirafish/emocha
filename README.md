# emocha

## 🍏 Quick start
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


## ☕ Usage
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

#
Made with ❤️ and りんごらてオバケ🍏☕👻