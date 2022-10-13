const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

/////////////////////////////////////////////////////

const embed = {
  "title": "Myhomoludens — Twitch.tv",
  "description": "Est-ce que je peux faire quelques choses pour rendre ta journée meilleure ?",
  "url": "https://www.twitch.tv/myhomoludens",
  "color": 3092790, // Couleur format JSON
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/353374886078709760/2274a279e6bddaab753cbdda08727548.webp?size=160", // Image à gauche du footer
    "text": "On doit généralement attendre si on lui demande quelque chose... 😭"
  },
};
message.delete();
message.channel.send({ embed });


/////////////////////////////////////////////////////

}

module.exports.help = {
  name:"mhl"
}
