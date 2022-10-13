const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

const answers = [
  'https://cdn.discordapp.com/attachments/1003441227556991097/1012203175035551865/AnkhaSFW.mp4'
  ]

const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

/////////////////////////////////////////////////////

const embed = {
  "description": "<:ankhaShy:1012105513921679431> Voici un p'tit snap rouge ! ❤️",
  "color": 3092790,
};
message.delete();
message.channel.send({ embed });
message.reply(randomAnswer);

/////////////////////////////////////////////////////

}

module.exports.help = {
  name:"ankha"
}
