FROM node:8.1.4

ADD . /app
WORKDIR /app

RUN npm rebuild node-sass --force/
RUN npm install

ARG APP_NODE_ENV=production
ENV NODE_ENV ${NODE_ENV}

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
