FROM node:10

ARG COMMIT_REF
ARG BUILD_DATE

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g yarn
RUN yarn install

COPY . .

ENV APP_COMMIT_REF=${COMMIT_REF} \
    APP_BUILD_DATE=${BUILD_DATE}

EXPOSE 8080

CMD ["yarn", "start"]