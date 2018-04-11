FROM keymetrics/pm2:latest-latest-stretch

WORKDIR /app

COPY . .

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list && \
    apt update && apt install --no-install-recommends yarn && \
    yarn install && \
    yarn build

CMD ["pm2-runtime","start","ecosystem.config.js"]