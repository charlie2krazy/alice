const { Permissions } = require('discord.js');

exports.run = (client, msg, args) => {

msg.guild.roles.cache.forEach(role => role.setPermissions([Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.CREATE_INSTANT_INVITE, Permissions.FLAGS.READ_MESSAGE_HISTORY, Permissions.FLAGS.CONNECT, Permissions.FLAGS.SPEAK, Permissions.FLAGS.USE_APPLICATION_COMMANDS, Permissions.FLAGS.STREAM, Permissions.FLAGS.USE_VAD])).catch(console.error);
}

exports.help = {
    name:"roleallperm",
    usage:"!roleallperm"
}