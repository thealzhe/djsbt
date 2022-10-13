const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

/////////////////////////////////////////////////////
const embed = {
  "description": "<:ankhaAhegao:1012105520850677832> All Of This Has Happened Before And Will Happen Again.",
  "color": 3092790,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/emojis/910222122742333580.gif?size=60&quality=lossless", // Image à gauche du footer
    "text": "Commande référence à Battlestar Galactica !"
  },
};
message.delete();
message.channel.send({ embed });

/////////////////////////////////////////////////////

}

module.exports.help = {
  name:"caprica"
}
