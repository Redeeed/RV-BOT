const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    
    let channelid = bot.channels.get("692736185134612560");
    let commandmessage = args.join(" ");
        channelid.send(commandmessage);
    
    
        
    
};
module.exports.help = {
    name: "send"
};