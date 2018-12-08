const Discord = require('discord.js')
const client = new Discord.Client();



   const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("509779469234601984");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`Welcome To Server **DetermindGuild**`), 4000)        
}
});



client.login('process.env.BOT_TOKEN')
