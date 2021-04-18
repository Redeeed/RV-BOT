const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    
    let channelid = bot.channels.get("793422656485195788");
    let commandmessage = args.join(" ");
        channelid.send(commandmessage);
    
    
        
    
};
module.exports.help = {
    name: "!send"
};