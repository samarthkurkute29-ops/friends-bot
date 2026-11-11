const http = require('http');
http.createServer((req, res) => { res.end('Bot is alive'); }).listen(process.env.PORT || 3000);
const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'FRIENDSSMP-ZM3h.aternos.me',
    port: 51224,
    username: 'Rohan_plays',
    auth: 'offline',
    version: false
  });

  bot.once('spawn', () => {
    console.log('Bot join ho gaya!');
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
      bot.look(Math.random() * Math.PI, 0);
    }, 10000);
  });

  bot.on('end', () => {
    console.log('Bot kick ho gaya, 30 sec me wapas aayega...');
    setTimeout(startBot, 30000);
  });

  bot.on('error', (err) => console.log(err));
}

startBot();
