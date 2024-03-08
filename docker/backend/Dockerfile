FROM python:3.12.2-bullseye

ARG USERNAME=pyuser
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME

ENV PYTHONUSERBASE=/home/$USERNAME/.local
ENV PATH=$PYTHONUSERBASE/bin:$PATH

USER $USERNAME

WORKDIR /home/${USERNAME}/backend

COPY ./requirements.txt ./

RUN pip install --user --upgrade pip

RUN pip install --user --no-cache-dir -r requirements.txt
