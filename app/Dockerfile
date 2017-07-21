FROM node:8.1

RUN mkdir -p /var/www/node-app
WORKDIR /var/www/node-app

COPY ./index.js /var/www/node-app
COPY ./package.json /var/www/node-app

RUN npm install

CMD [ "npm", "start" ]