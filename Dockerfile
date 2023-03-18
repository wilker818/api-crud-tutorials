FROM node:16.19.1-alpine

WORKDIR /node/app

COPY . .

RUN npm install

COPY --chown=node:node . .

USER node

CMD [ "node", "server.js" ]