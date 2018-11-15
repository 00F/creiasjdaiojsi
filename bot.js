//////////////////////////////////////////////////////////////////////////////////////////////////
const Discord1 = require('discord.js');
const Discord2 = require('discord.js');
const Discord3 = require('discord.js');
const Discord4 = require('discord.js');
const Discord5 = require('discord.js');
const Discord6 = require('discord.js');
const Discord7 = require('discord.js');
const Discord8 = require('discord.js');
//////////////////////////////////////////////////////////////////////////////////////////////////
const client1 = new Discord1.Client();
const client2 = new Discord2.Client();
const client3 = new Discord3.Client();
const client4 = new Discord4.Client();
const client5 = new Discord5.Client();
const client6 = new Discord6.Client();
const client7 = new Discord7.Client();
const client8 = new Discord8.Client();
//////////////////////////////////////////////////////////////////////////////////////////////////
var ServerID = "510514272229392384"; 
var ChannelID = "511987790817394721";
var prefix = "F";
console.log('Bots is Fuckin` Online ');
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on('ready', () => {
client1.user.setActivity('M. // F.', {type: "STREAMING",url: "http://www.twitch.tv/MeeRcY"});
});
client2.on('ready', () => {
client2.user.setActivity('M. // F.', {type: "STREAMING",url: "http://www.twitch.tv/MeeRcY"});
});
client3.on('ready', () => {
client3.user.setActivity('M. // F.', {type: "STREAMING",url: "http://www.twitch.tv/MeeRcY"});
});
client4.on('ready', () => {
client4.user.setActivity('M. // F.', {type: "STREAMING",url: "http://www.twitch.tv/MeeRcY"});
});
client5.on('ready', () => {
client5.user.setActivity('M. // F.', {type: "STREAMING",url: "http://www.twitch.tv/MeeRcY"});
});
client6.on('ready', () => {
client6.user.setActivity('M. // F.', {type: "STREAMING",url: "http://www.twitch.tv/MeeRcY"});
});
client7.on('ready', () => {
client7.user.setActivity('M. // F.', {type: "STREAMING",url: "http://www.twitch.tv/MeeRcY"});
});
client8.on('ready', () => {
client8.user.setActivity('M. // F.', {type: "STREAMING",url: "http://www.twitch.tv/MeeRcY"});
});
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client2.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client3.on("message", message => {
    if (message.author.bot) return;
    if(!message.channel.guild) return;
      if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
  if(message.author.id !== "320423357709549568") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
      let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client4.on("message", message => {
    if (message.author.bot) return;
    if(!message.channel.guild) return;
      if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
  if(message.author.id !== "320423357709549568") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
      let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client5.on("message", message => {
    if (message.author.bot) return;
    if(!message.channel.guild) return;
      if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
  if(message.author.id !== "320423357709549568") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
      let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client6.on("message", message => {
    if (message.author.bot) return;
    if(!message.channel.guild) return;
      if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
  if(message.author.id !== "320423357709549568") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
      let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client7.on("message", message => {
    if (message.author.bot) return;
    if(!message.channel.guild) return;
      if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
  if(message.author.id !== "320423357709549568") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
      let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client8.on("message", message => {
    if (message.author.bot) return;
    if(!message.channel.guild) return;
      if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
  if(message.author.id !== "320423357709549568") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
      let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
client2.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.login(process.env.BOT_TOKEN1);
client2.login(process.env.BOT_TOKEN2);
client3.login(process.env.BOT_TOKEN3);
client4.login(process.env.BOT_TOKEN4);
client5.login(process.env.BOT_TOKEN5);
client6.login(process.env.BOT_TOKEN6);
client7.login(process.env.BOT_TOKEN7);
client8.login(process.env.BOT_TOKEN8);
