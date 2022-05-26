FROM node:16

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 9091 

CMD [ "node", "server.js" ] 


