const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

/////////////////////////////////////////////////////

const embed = {
  "title": "BlackPeace",
  "description": "Il dit à Alzhe de laisser Shiro tranquille, mais il n'est pas là pour assouvir les besoins d'Alzhe ! ",
  "color": 3092790, // Couleur format JSON
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/266242829905297409/a_36ad3fd47fc8b2250b152a81e0c4be43.gif?size=160", // Image à gauche du footer
    "text": "D'ailleurs, on l'a connu et rapatrié de la communauté de Ririmiaou ! :D"
  },
};
message.delete();
message.channel.send({ embed });


/////////////////////////////////////////////////////

}

module.exports.help = {
  name:"blackpeace"
}
