var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot("242777033:AAF7Y35QRQBuMcvhTYmwyBK9BXqizwBGPgo", { polling: true });

telegram.on("text", (message) => {
  telegram.sendMessage(message.chat.id, "Hello world");
});

telegram.on("text", (message) => {
  if(message.text.toLowerCase().indexOf("/name") === 0){
    telegram.sendMessage(message.chat.id, "I am a bot with no name");
    telegram.sendMessage(message.chat.id, "Actually I have name 😀");
  }
});

telegram.on("text", (message) => {
  if(message.text.toLowerCase().indexOf("/start") === 0){
    telegram.sendMessage(message.chat.id, "Bot started");
  }
});
