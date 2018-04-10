import Telegraf from 'telegraf';
import uuid from 'uuid/v5';
import fs from 'fs';
import saveToPdf from './saveToPdf';

const URL_REGEXP = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g;

const bot = new Telegraf(process.env.BOT_TOKEN || '');

bot.use((ctx, next) => {
  const start = new Date();
  return next(ctx).then(() => {
    const ms = new Date() - start;
    console.log('Response time %sms', ms);
  });
});


bot.start(ctx => ctx.reply('Give me a link and I will make PDF from it'));
bot.on('message', async (ctx) => {
  // console.log(ctx.message);
  const match = String(ctx.message.text).match(URL_REGEXP);
  console.log(`Matched link: ${match}`);
  if (match != null) {
    const name = `${uuid(match[0], uuid.URL)}.pdf`;
    const path = `storage/${name}`;
    await saveToPdf(match[0], path);
    console.log(`File saved ${path}`);
    ctx.replyWithDocument({ source: fs.readFileSync(path), filename: name });
  } else {
    ctx.reply('No link provided!');
  }
});

bot.startPolling();
