const Discord = require('discord.js')
const { MessageEmbed, MessageAttachment, MessageButton, MessageActionRow, version } = require(`discord.js`);
var dt = new Date();


var tarih = (`${("Tarih", dt.getDate()).toString().padStart(2, '0')}.${(dt.getMonth() + 1).toString().padStart(2, '0')}.${dt.getFullYear().toString().padStart(4, '0')}`
);

exports.run = async (client, message, args) => {


   
   const { MessageEmbed } = require("discord.js")

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
const embed = new MessageEmbed()
.setURL("https://discord.gg/xspxZeh58x")
  .setTitle('Yardım Menüsü ') //başlığınız.
  .setColor('GREEN') // Embed Rengi
  .setThumbnail(client.user.avatarURL())
  .addFields({ name: ".kuran", value: "Kuran-ı Kerimdeki ayetlerin anlamlarını verir. ``(Örnek Kullanım: .kuran 1.1)``"},
               { name: ".sure", value: "Kuran-ı Kerimdeki surelerin anlamlarını verir. ``(Örnek Kullanım: .sure 1)``"},
                { name: ".vakit", value: "Belirttiğiniz şehrin Namaz Vakitlerini Verir.``(Örnek Kullanım: .vakit sanliurfa)``"},
             { name: ".tarihtebugün", value: "Tarihte bugün yaşanan olayları verir. NOT: Güncelleme aşamasındadır. ``(Örnek Kullanım: .tarihtebugün)``"},
             { name: ".i", value: "Botun istatistik verilerini gösterir. ``(Örnek Kullanım: .i)``"}
             )
  .setTimestamp()
  .setFooter({text: `${message.guild.name} - ${tarih}`, iconURL: message.guild.iconURL()});

 message.channel.send({ embeds: [embed], components: [row] })

 
};
exports.conf = {
    aliases: [],
};

exports.help = {
    name: 'yardım',
};
