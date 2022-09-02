const axios = require("axios")
const config = require('../config.json')

var dt = new Date();

  var tarih = (`${
      ("Tarih", dt.getDate()).toString().padStart(2, '0')}.${
      (dt.getMonth()+1).toString().padStart(2, '0')}.${
      dt.getFullYear().toString().padStart(4, '0')}`
  );


var prefix = config.prefix;

exports.run = async (client, message, args) => {
  
      const { MessageEmbed } = require('discord.js')
      axios.get(`https://api.ubilisim.com/tarihtebugun/`)
      .then(response => {
            let description = `${response.data.tarihtebugun.map(i => `${i.Durum} - ${i.Olay} - ${i.Gun}/${i.Ay}/${i.Yil}`).join('\n\n')}`
            const embed = new MessageEmbed()
                .setTimestamp()
        .setAuthor({name: message.guild.name, avatar: message.guild.iconURL()})
        .setThumbnail(message.guild.iconURL())
        .setColor("#42ab0e")
        .addFields({ name: `\u200b`, value: "[Botu Davet et](https://discord.com/api/oauth2/authorize?client_id=967069819763585044&permissions=534723950656&scope=bot%20applications.commands) - [Destek sunucusu](https://discord.gg/Cypa3SUa7u)" })
        .setDescription(description.length >= 4096 ? description.substring(0, 4093) + '...' : description)
            .setFooter({text: `${message.guild.name} - ${tarih}`, iconURL: message.guild.iconURL()});
      message.channel.send({ embeds: [embed] });
    });
};

exports.conf = {
  aliases: [],
};

exports.help = {
  name: "tarihtebugün",
}; 
