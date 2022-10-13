const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

/////////////////////////////////////////////////////
message.delete(); // Supprimer la commande envoyée
message.channel.send('<:ankhaSip:1012105516031410297> J\'ai une latence de ' + `\`${bot.ws.ping}ms\` avec les serveurs de Discord.`);
/////////////////////////////////////////////////////

}

module.exports.help = {
  name:"ping"
}
