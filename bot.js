const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("512908116581679105");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**.# Bienvenue Sur Dalida**`), 4000)        
}
});
bot.login("توكن البوت")
