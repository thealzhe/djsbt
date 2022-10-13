const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

  if(!args[1]) return message.reply("merci de bien vouloir poser une question complète !");
  let replies = ["Oui.", "Non.", "Je ne sais pas.", "Je ne souhaite pas répondre."];
  
  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(" ");
  
  let ballembed = new Discord.MessageEmbed()
  .setColor("#2f3136")
  .addField("<:ankhaSip:1012105516031410297> Question de " + message.author.tag, question)
  .addField("<:ankhaPray:1012105510163595285> Ma réponse", replies[result]);
  
  message.delete();
  message.channel.send(ballembed) 
}

module.exports.help = {
  name:"8b"
}
