# Web to PDF telegram bot

Telegram bot for saving web pages to pdf files

Saves given web page to pdf using puppeteer

## Usage

* `yarn install`
* Change `BOT_TOKEN` value in `package.json` or `index.js`
* `yarn dev` for development
* `yarn build` for builing production bundle
* `yarn serve` for seving production bundle

You can use `pm2` or `forever` to control monitoring process

## Enchantments

* Alternative file naming (now using uuidv5)
* in-PDF customization, e.g. url in the title, etc 

## Issues

* It seems like Google is blocking requests from `puppeteer` even if proper User-Agent has been installed
* `nodemon` doesn't work with `babel-node` idk why
