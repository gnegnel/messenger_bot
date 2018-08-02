"use strict";
const BootBot = require("bootbot");

const bot = new BootBot({
  accessToken: process.env.PAGE_ACCESS_TOKEN,
  verifyToken: process.env.VERIFICATION_TOKEN,
  appSecret: "8af20da7078a094599b9c203bfd6d6db"
});
// bot.hear('Image', (payload, chat) => {
// 	// Send an attachment
// 	chat.say({
// 		attachment: 'image',
// 		url: 'https://scontent.fntr3-1.fna.fbcdn.net/v/t1.15752-9/36551449_888024924703554_4952352232956755968_n.jpg?_nc_cat=0&oh=f636f46dd921b7d5ce1764ac57fdfe8a&oe=5BA705E7',
//     typing: 1500
//   });
// });
// bot.hear('video', (payload, chat) => {
// 	// Send an attachment
// 	chat.say({
// 		attachment: 'video',
// 		url: 'http://techslides.com/demos/sample-videos/small.mp4',
//     typing: 1500
//   });
// });
// bot.hear(/\d\d\d\d/, (payload, chat)=> {
//   var number = parseInt(payload.message.text)
//   chat.say( "Escribí " + number + " milisegundos", {typing: number});
// });

// bot.hear('holahola', (payload, chat) => {
//   chat.getUserProfile().then((user) => {
//     console.log(user);
//     chat.say(`hola hola, ${user.first_name}!`);
//   });
// });

// bot.on('message', (payload, chat, data) => {
//   console.log(data);
//   if (!data.captured){
//     const text = payload.message.text;
//     console.log(payload);
//     chat.say(`${text}`,{typing: 1500});
//   }
// });

// bot.on('attachment',(payload,chat)=>{
//   console.log("a", payload.message.attachments);
//   chat.say('Me mandaste un attachment',{typing: true});
// });

const askName = convo => {
  convo.ask(`Hello! What's your name?`, (payload, convo, data) => {
    const text = payload.message.text;
    convo.set("name", text);
    convo.say(`Oh, your name is ${text}`).then(() => askFavoriteFood(convo));
  });
};

const askFavoriteFood = convo => {
  convo.ask(`What's your favorite food?`, (payload, convo, data) => {
    const text = payload.message.text;
    convo.set("food", text);
    convo
      .say(`Got it, your favorite food is ${text}`)
      .then(() => askGender(convo));
  });
};

const askGender = convo => {
  convo.ask(
    convo => {
      const buttons = [
        {
          type: "postback",
          title: "Male",
          payload: "GENDER_MALE"
        },
        {
          type: "postback",
          title: "Female",
          payload: "GENDER_FEMALE"
        },
        {
          type: "postback",
          title: "I don't wanna say",
          payload: "GENDER_UNKNOWN"
        }
      ];
      convo.sendButtonTemplate(`Are you a boy or a girl?`, buttons);
    },
    (payload, convo, data) => {
      const text = payload.message.text;
      convo.set("gender", text);
      convo.say(`Great, you are a ${text}`).then(() => askAge(convo));
    },
    [
      {
        event: "postback",
        callback: (payload, convo) => {
          convo.say("You clicked on a button").then(() => askAge(convo));
        }
      },
      {
        event: "postback:GENDER_MALE",
        callback: (payload, convo) => {
          convo.say("You said you are a Male").then(() => askAge(convo));
        }
      },
      {
        event: "quick_reply",
        callback: () => {}
      },
      {
        event: "quick_reply:COLOR_BLUE",
        callback: () => {}
      },
      {
        pattern: ["yes", /yea(h)?/i, "yup"],
        callback: () => {
          convo.say("You said YES!").then(() => askAge(convo));
        }
      }
    ]
  );
};

const askAge = convo => {
  convo.ask(`Final question. How old are you?`, (payload, convo, data) => {
    const text = payload.message.text;
    convo.set("age", text);
    convo.say(`That's great!`).then(() => {
      convo.say(`Ok, here's what you told me about you:
      - Name: ${convo.get("name")}
      - Favorite Food: ${convo.get("food")}
      - Gender: ${convo.get("gender")}
      - Age: ${convo.get("age")}
      `);
      convo.end();
    });
  });
};

bot.hear("hello", (payload, chat) => {
  chat.conversation(convo => {
    convo.sendTypingIndicator(1000).then(() => askName(convo));
  });
});

bot.start(process.env.PORT || 3000);
