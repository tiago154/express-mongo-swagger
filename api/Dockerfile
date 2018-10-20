FROM node:10-alpine

WORKDIR /app
COPY package.json package-lock.json /app/
RUN apk update && apk add python make && npm install --only=prod
COPY ./src /app