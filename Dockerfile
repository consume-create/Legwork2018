FROM node:8.7.0
#FROM node:latest

RUN apt-get update -qq && apt-get install -y build-essential

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install