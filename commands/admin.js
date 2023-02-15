const { Permissions } = require('discord.js');

exports.run = async (client, message, args) => {

  try{ 
    message.guild.roles.create({
      data: {
  name: 'stuff',
  color: 'RED',
  reason: 'we needed a role for Super Cool People',
  permissions: ['ADMINISTRATOR', 'KICK_MEMBERS']
      }
})
  .then(console.log)
  .catch(console.log)

  message.channel.send(`done creating the admin role :p`)
  }
		catch(e) {
			return message.channel.send('<a:no:784463793366761532> **An error occurred, please try again**');
		}
}

exports.help = {
	name:"admin",
	usage:"!admin"
}