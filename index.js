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
  chat.say(`${text}`);
});

bot.on('attachment',(payload,chat)=>{
  console.log("a", payload.message.attachments[0]);
  console.log("b", payload.message.attachments[1]);
  console.log("c", payload.message.attachments);
  chat.say('Me mandaste un attachment');
});

bot.start(process.env.PORT || 3000);
