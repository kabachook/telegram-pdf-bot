FROM keymetrics/pm2:latest-alpine

RUN apk add yarn && \
    yarn install && \
    yarn build

WORKDIR /app

COPY . .

CMD ["pm2-runtime","start","ecosystem.config.js"]