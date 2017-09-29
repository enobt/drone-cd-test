FROM node:latest

RUN mkdir -p /var/www/ui

WORKDIR /var/www/ui

COPY . /var/www/ui

RUN npm install

CMD [ "npm", "start" ]
