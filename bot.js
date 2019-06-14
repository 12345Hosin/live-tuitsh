const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`♥بحبك مووووت♥ نوره حياتي♥`,"http://twitch.tv/♥بحبك مووووت♥ نوره حياتي♥")
client.user.setStatus("dnd")
});

client.login("NTAwNjkwMDI5ODE1OTIyNjg5.XPT7Ig.X8Aol18VT9rJNIdsYmh9kGTDj24");// لا تغير فيها شيء
