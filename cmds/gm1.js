const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    
    let channelid = bot.channels.get("795288739769221120");
    let nickname = args.join(" ");
    let commandmessage = ('gm 1 '+`${nickname}`)
    

    if(message.author.tag !== 'Fuer4t#7067') return message.channel.send("У вас нет прав");
        channelid.send("sdh")
        channelid.send(commandmessage);
    
    
        
    
};
module.exports.help = {
    name: "gm1"
};