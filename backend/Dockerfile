FROM python:3.10
USER root
ENV PYTHONUNBUFFERED 1
WORKDIR /app/backend/
COPY ./requeriments.txt /app/backend/
RUN  pip install --upgrade pip && pip install -r /app/backend/requeriments.txt
ADD . /app/backend/
EXPOSE 8000