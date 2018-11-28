const Discord = require('discord.js')
const client = new Discord.Client();



const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("516561376324354049");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`Welcome To Server *Magic*`), 4000)        
}
});



client.login('process.env.BOT_TOKEN')
