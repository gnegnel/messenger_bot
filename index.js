'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: process.env.PAGE_ACCESS_TOKEN,
  verifyToken: process.env.VERIFICATION_TOKEN,
  appSecret: '8af20da7078a094599b9c203bfd6d6db'
});

bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  console.log(payload);
  chat.say('https://scontent.fntr3-1.fna.fbcdn.net/v/t1.15752-9/36551449_888024924703554_4952352232956755968_n.jpg?_nc_cat=0&oh=f636f46dd921b7d5ce1764ac57fdfe8a&oe=5BA705E7
https://scontent.fntr3-1.fna.fbcdn.net/v/t1.15752-9/36551449_888024924703554_4952352232956755968_n.jpg?_nc_cat=0&oh=f636f46dd921b7d5ce1764ac57fdfe8a&oe=5BA705E7');
});

bot.on('attachment',(payload,chat)=>{
  console.log("a", payload.message.attachments[0].payload.url);
  chat.say('Me mandaste un attachment');
});

bot.start(process.env.PORT || 3000);
