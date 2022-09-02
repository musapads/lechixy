const axios = require("axios")
const config = require('../config.json')
const { MessageEmbed, MessageAttachment, MessageButton, MessageActionRow, version } = require(`discord.js`);
var dt = new Date();

  var tarih = (`${
      ("Tarih", dt.getDate()).toString().padStart(2, '0')}.${
      (dt.getMonth()+1).toString().padStart(2, '0')}.${
      dt.getFullYear().toString().padStart(4, '0')}`
  );


var prefix = config.prefix;

exports.run = async (client, message, args) => {
  
  const row = new MessageActionRow()
  .addComponents(
      new MessageButton()
          .setLabel('Destek Sunucum')
          .setURL('https://discord.gg/xspxZeh58x')
          .setEmoji('1011307210594336828')
          .setStyle('LINK'),
  
          new MessageButton()
          .setLabel('Botu Davet Et!')
          .setURL('https://discord.com/oauth2/authorize?client_id=967069819763585044&permissions=534723950656&scope=bot%20applications.commands')
          .setEmoji('1009825915125108796')
          .setStyle('LINK'),
  
          new MessageButton()
          .setLabel('Oy Ver')
          .setURL('https://top.gg/bot/967069819763585044/vote')
          .setEmoji('1011305517496418315')
          .setStyle('LINK'),
  );


      const { MessageEmbed } = require('discord.js')
      if(!args[0]) return message.channel.send("sure sayısı gir")
      const suresayısı = args.join(" ")
      axios.get(`https://api.ubilisim.com/kuran/sure/${suresayısı}`)
      .then(response => {
    if (!response.data.success) {
        return message.channel.send({ content: `**Yanlış bir sure numarası girdiniz.**` })
    }
    const sure = response.data.sureaditr,
        sureacıklama = response.data.sureaciklama,
        cuz = response.data.cuz,
        sayfa = response.data.sayfa;
            console.log(`Sure adı :${sure} \n Sure Açıklaması :${sureacıklama} \n Cüz : ${cuz} \n Sayfa : ${sayfa}`)
            const embed = new MessageEmbed()
                .setTimestamp()
        .setAuthor({name: message.guild.name, avatar: message.guild.iconURL()})
        .setThumbnail(message.guild.iconURL())
        .setURL("https://discord.gg/xspxZeh58x")
        .setTitle(`**-${sure} Suresi-**`)
        .setColor("#42ab0e")
                .setDescription(`Sure Açıklaması :${sureacıklama} \n Cüz : ***${cuz}***  Sayfa : ***${sayfa}***`)
            .setFooter({text: `${message.guild.name} - ${tarih}`, iconURL: message.guild.iconURL()});
      message.channel.send({ embeds: [embed], components: [row] });
    });
};

exports.conf = {
  aliases: [],
};

exports.help = {
  name: "sure",
};
