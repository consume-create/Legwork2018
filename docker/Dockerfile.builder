FROM node:8.7.0

RUN apt-get update -qq && apt-get install -y build-essential

RUN mkdir /app

WORKDIR /app
ADD . /app

RUN npm install

EXPOSE 8080
