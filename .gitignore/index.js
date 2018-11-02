const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Fondateur Ecorp, !help");
    console.log("Le bot à bien été connecté");
});

bot.login("NTA3NzA3MTQxNzMwMzM2Nzc5.Dr0nDQ.1gOJM75LKi490ExxaO3mY9dST14");
