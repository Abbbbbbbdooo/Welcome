const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("509745217285652513");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**Welcome To Server Magic**`), 4000)        
}
});
bot.login("NDk4Mzk3OTUyNjE2NjkzNzcy.DtBGrg.ZBl-rtlfhh8C_MWbWXsXiQ_lyoM")
