const config = require("./config.json");
const token = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

bot.on("ready", async () => {
  console.log(`✔  | ${bot.user.username} est en ligne sur ${bot.guilds.cache.size} serveur(s) !`);

  bot.user.setActivity("le Projet Alice", {type: "WATCHING"}); // edit activity of the bot here.
});

fs.readdir("./commandes/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("✖ | Aucunes commandes trouvées..."); // if you delete <command>.js files
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commandes/${f}`);
    console.log(`🚨 | ${f} `);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  if(!cmd.startsWith(config.prefix)) return;
  
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(token.token);