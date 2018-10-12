FROM node:9.11.1

ADD . /app
WORKDIR /app

RUN yarn

ARG APP_NODE_ENV=production
ENV NODE_ENV ${NODE_ENV}

EXPOSE 3000

CMD ["yarn", "start"]
