FROM python:3.12.2-bullseye

WORKDIR /usr/src/app

COPY ./requirements.txt ./

RUN pip install --upgrade pip

RUN pip install --no-cache-dir -r requirements.txt
