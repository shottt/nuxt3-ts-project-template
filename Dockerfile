FROM node::18.2.0

ENV NODE_PATH /usr/src/app/node_modules

COPY . /usr/src/app

WORKDIR /usr/src/app