const { MessageEmbed } = require('discord.js')
exports.run = async (client, msg, args) => {
    let embed = new MessageEmbed()
    .setColor("DEFAULT")
    .setDescription(args.join(" "));
    msg.channel.send(embed)
}

  module.exports.help = {
    name:"embed",
    usage: '!embed',
  }