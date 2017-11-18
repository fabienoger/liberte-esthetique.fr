FROM node:7.8-alpine

ADD . /app
WORKDIR /app

RUN npm rebuild node-sass --force/
RUN npm install

ARG APP_NODE_ENV=production
ENV NODE_ENV ${NODE_ENV}

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
