const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

  let randomPer = message.guild.members.cache.random().user;  

  let roulette = new Discord.MessageEmbed()
  .setColor("#2f3136")
  .addField("<:ankhaSmug:1012105519252639856> Tirage au sort", randomPer);
  message.delete();
  message.channel.send(roulette) 
}

module.exports.help = {
  name:"pick"
}
