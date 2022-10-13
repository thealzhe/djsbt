const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

/////////////////////////////////////////////////////

const embed = {
  "title": "thealzhe | mon développeur.",
  "description": "À mon très cher développeur, merci de m'avoir créé.\n\n── <@784972652561170443>",
  "color": 3092790, // Couleur format JSON
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/386435321900040212/a_5c52a755bc38d2922b3f54401cc608dd.gif?size=128", // Image à gauche du footer
    "text": "Discord: dsc.gg/alz ── Twitch: twitch.tv/thealzhe"
  },
};
message.delete();
message.channel.send({ embed });


/////////////////////////////////////////////////////

}

module.exports.help = {
  name:"alzhe"
}
