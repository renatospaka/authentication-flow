FROM node:14.17.6-alpine3.14

RUN apk add --no-cache bash \
    && apk add tzdata \
    && cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime

WORKDIR /home/node/app
COPY . .

USER node