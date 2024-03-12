import os
from dotenv import load_dotenv
from sqlalchemy import create_engine,text

#.envファイルの読み込み
load_dotenv()

# データベースの設定
username=os.getenv("DB_USERNAME")
password=os.getenv("DB_PASSWORD")
host=os.getenv("DB_HOST")
port=os.getenv("DB_PORT")
database=os.getenv("DB_DATABASE_NAME")

# データベースエンジンを作成
engine = create_engine(f"postgresql://{username}:{password}@{host}:{port}/{database}")

# データベースと接続
with engine.connect() as conn:
    result = conn.execution_options(stream_results=True).execute(text("select * from sample"))
    print(result.fetchall())

engine.dispose()