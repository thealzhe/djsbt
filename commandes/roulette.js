const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

  if(!args[1]) return message.reply("merci de bien vouloir poser une question complète !");
  let question = args.slice(0).join(" ");
  let randomPer = message.guild.members.cache.random().user;  

  let roulette = new Discord.MessageEmbed()
  .setColor("#2f3136")
  .addField("<:ankhaSip:1012105516031410297> Question de " + message.author.tag, question)
  .addField("<:ankhaPray:1012105510163595285> Ma réponse", randomPer);
  
  message.delete();
  message.channel.send(roulette) 
}

module.exports.help = {
  name:"roulette"
}
