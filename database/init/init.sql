create database emocha_db;

\connect emocha_db;

-- 仮データ
create table if not exists sample(
    id serial primary key,
    name text,
    age int
);

insert into members(name,age) values('hoge',99);