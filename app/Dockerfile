FROM node:8.1

RUN mkdir -p /var/www/app
WORKDIR /var/www/app

COPY ./index.js /var/www/app
COPY ./package.json /var/www/app

RUN npm install

CMD [ "npm", "start" ]