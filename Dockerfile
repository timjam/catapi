FROM node:10

ARG COMMIT_REF
ARG BUILD_DATE

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV APP_COMMIT_REF=${COMMIT_REF} \
    APP_BUILD_DATE=${BUILD_DATE}

EXPOSE 3456

CMD ["npm", "start"]