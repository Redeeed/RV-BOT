const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    
    let channelid = bot.channels.get("795288739769221120");
    let nickname = args.join(" ");
    let time = args.slice(2).join(' ')
    
    let commandmessage = ('mute '+`${nickname}`+`${time}`)

    if(message.author.tag !== 'Fuer4t#7067') return message.channel.send("У вас нет прав");
        
        channelid.send(commandmessage);
    
   
};
module.exports.help = {
    name: "mute"
};