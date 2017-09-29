FROM node:latest

RUN mkdir -p /var/www/api

WORKDIR /var/www/api

COPY . /var/www/api

RUN npm install

CMD [ "npm", "start" ]
