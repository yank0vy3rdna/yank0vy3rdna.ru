FROM node:12

MAINTAINER yank0vy3rdna <bibiwa2001@gmail.com>

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9123
CMD [ "node", "app.js" ]