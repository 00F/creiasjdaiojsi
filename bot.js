//////////////////////////////////////////////////////////////////////////////////////////////////
const D1 = require('discord.js');
const D2 = require('discord.js');
const D3 = require('discord.js');
const D4 = require('discord.js');
const D5 = require('discord.js');
const D6 = require('discord.js');
const D7 = require('discord.js');
const D8 = require('discord.js');
const D9 = require('discord.js');
const D10 = require('discord.js');
//////////////////////////////////////////////////////////////////////////////////////////////////
const p1 = new D1.Client();
const p2 = new D2.Client();
const p3 = new D3.Client();
const p4 = new D4.Client();
const p5 = new D5.Client();
const p6 = new D6.Client();
const p7 = new D7.Client();
const p8 = new D8.Client();
const p9 = new D9.Client();
const p10 = new D10.Client();
//////////////////////////////////////////////////////////////////////////////////////////////////
var ServerID = "521659507970015235"; 
var ChannelID = "521666132462010369";
var prefix = "M";
console.log('Bots. Is. Online.');
//////////////////////////////////////////////////////////////////////////////////////////////////
p1.on('ready', () => {  
    function timerFunc() {
        p1.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p2.on('ready', () => {
    function timerFunc() {
        p2.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p3.on('ready', () => {
    function timerFunc() {
        p3.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p4.on('ready', () => {
    function timerFunc() {
        p4.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p5.on('ready', () => {
    function timerFunc() {
        p5.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p6.on('ready', () => {
    function timerFunc() {
        p6.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p7.on('ready', () => {
    function timerFunc() {
        p7.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p8.on('ready', () => {
    function timerFunc() {
        p8.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p9.on('ready', () => {
    function timerFunc() {
        p9.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
p10.on('ready', () => {
    function timerFunc() {
        p10.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
//////////////////////////////////////////////////////////////////////////////////////////////////
p1.on('message', message => {
    if(message.author.id !== '320423357709549568') return;
    if(message.content.toLowerCase().split(' ')[0] == '1s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p2.on('message', message => {
    if(message.author.id !== '320423357709549568') return;
    if(message.content.toLowerCase().split(' ')[0] == '2s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p3.on('message', message => {
    if(message.author.id !== '320423357709549568') return;
    if(message.content.toLowerCase().split(' ')[0] == '3s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p4.on('message', message => {
    if(message.author.id !== '320423357709549568') return;
    if(message.content.toLowerCase().split(' ')[0] == '4s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p5.on('message', message => {
    if(message.author.id !== '320423357709549568') return;
    if(message.content.toLowerCase().split(' ')[0] == '5s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p6.on('message', message => {
    if(message.author.id !== '320423357709549568') return;
    if(message.content.toLowerCase().split(' ')[0] == '6s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p7.on('message', message => {
    if(message.author.id !== '320423357709549568') return;
    if(message.content.toLowerCase().split(' ')[0] == '7s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p8.on('message', message => {
    if(message.author.id !== '320423357709549568') return;
    if(message.content.toLowerCase().split(' ')[0] == '8s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p9.on('message', message => {
    if(message.author.id !== '320423357709549568') return;
    if(message.content.toLowerCase().split(' ')[0] == '9s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
p10.on('message', message => {
    if(message.author.id !== '320423357709549568') return;
    if(message.content.toLowerCase().split(' ')[0] == '10s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////
p1.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p2.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p3.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p4.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p5.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p6.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p7.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p8.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p9.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
p10.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply(' ').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
//////////////////////////////////////////////////////////////////////////////////////////////////
p1.on('ready', () => {
p1.user.setActivity("M.#0080",{type: 'LISTENING'})
});
p2.on('ready', () => {
p2.user.setActivity("M.#0080",{type: 'LISTENING'})
});
p3.on('ready', () => {
p3.user.setActivity("M.#0080",{type: 'LISTENING'})
});
p4.on('ready', () => {
p4.user.setActivity("M.#0080",{type: 'LISTENING'})
});
p5.on('ready', () => {
p5.user.setActivity("M.#0080",{type: 'LISTENING'})
});
p6.on('ready', () => {
p6.user.setActivity("M.#0080",{type: 'LISTENING'})
});
p7.on('ready', () => {
p7.user.setActivity("M.#0080",{type: 'LISTENING'})
});
p8.on('ready', () => {
p8.user.setActivity("M.#0080",{type: 'LISTENING'})
});
p9.on('ready', () => {
p9.user.setActivity("M.#0080",{type: 'LISTENING'})
});
p10.on('ready', () => {
p10.user.setActivity("M.#0080",{type: 'LISTENING'})
});
//////////////////////////////////////////////////////////////////////////////////////////////////
p1.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
p2.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
p3.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
p4.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
p5.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
p6.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
p7.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
p8.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply('كل زق ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
p9.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply('كل زق ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
p10.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "320423357709549568") return message.reply('كل زق ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
//////////////////////////////////////////////////////////////////////////////////////////////////
p1.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "320423357709549568") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
p2.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "320423357709549568") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
p3.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "320423357709549568") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
p4.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "320423357709549568") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
p5.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "320423357709549568") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
p6.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "320423357709549568") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
p7.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "320423357709549568") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
p8.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "320423357709549568") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
p9.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "320423357709549568") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
p10.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "d")) {
message.delete(3000);
if(message.author.id !== "320423357709549568") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#daily').then(s => {
s.delete(3000);
});
message.channel.send('->daily <@!320423357709549568>').then(s => {
s.delete(3000);
});
}
});
//////////////////////////////////////////////////////////////////////////////////////////////////
p1.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "320423357709549568") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p2.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "320423357709549568") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p3.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "320423357709549568") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p4.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "320423357709549568") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p5.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "320423357709549568") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p6.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "320423357709549568") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p7.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "320423357709549568") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p8.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "320423357709549568") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p9.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "320423357709549568") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
p10.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "cr")) {
message.delete(3000);
if(message.author.id !== "320423357709549568") return message.reply('').then(msg => msg.delete(3000));
message.channel.send('#credit').then(s => {
s.delete(3000);
});
}
});
//////////////////////////////////////////////////////////////////////////////////////////////////
p1.login(process.env.B1);
p2.login(process.env.B2);
p3.login(process.env.B3);
p4.login(process.env.B4);
p5.login(process.env.B5);
p6.login(process.env.B6);
p7.login(process.env.B7);
p8.login(process.env.B8);
p9.login(process.env.B9);
p10.login(process.env.B10);
