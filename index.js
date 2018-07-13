'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: process.env.PAGE_ACCESS_TOKEN,
  verifyToken: process.env.VERIFICATION_TOKEN,
  appSecret: '8af20da7078a094599b9c203bfd6d6db'
});
bot.hear('Image', (payload, chat) => {
	// Send an attachment
	chat.say({
		attachment: 'image',
		url: 'https://scontent.fntr3-1.fna.fbcdn.net/v/t1.15752-9/36551449_888024924703554_4952352232956755968_n.jpg?_nc_cat=0&oh=f636f46dd921b7d5ce1764ac57fdfe8a&oe=5BA705E7',
    typing: 1500
  });
});
bot.hear('video', (payload, chat) => {
	// Send an attachment
	chat.say({
		attachment: 'video',
		url: 'http://techslides.com/demos/sample-videos/small.mp4',
    typing: 1500
  });
});
bot.hear(\d\d\d\d, (payload, chat)=> {
  number = parseInt(payload.message.text)
  chat.say( "Escribí " + number + " milisegundos", {typing: number});
});

bot.on('message', (payload, chat, data) => {
  console.log(data);
  if !data.captured{
    const text = payload.message.text;
    console.log(payload);
    chat.say(`${text}`,{typing: 1500});
  }
});

bot.on('attachment',(payload,chat)=>{
  console.log("a", payload.message.attachments);
  chat.say('Me mandaste un attachment',{typing: true});
});

bot.start(process.env.PORT || 3000);
