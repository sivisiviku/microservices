FROM node:14 as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -g npm \
    && npm i

COPY . .

EXPOSE 3002

CMD ["npm","start"]