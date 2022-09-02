const { MessageEmbed, MessageAttachment, MessageButton, MessageActionRow, version } = require(`discord.js`);
const os = require(`os`);
const moment = require(`moment`);

exports.run = async (client, message, args) => {

		const { author, guild, channel } = message;

		const owner = client.users.cache.get('884451720510451753').tag

		const cpu = os.cpus().map(c => c.model)[0]
		var platform = os.platform()

		const up = os.uptime()
		const ver = os.version()

		if (platform === 'win32') { platform = 'Windows' } else if (platform === 'linux') { platform = 'Linux' } else if (platform = 'darwin') { platform = 'macOS' }
	
// https:/v13.discordjs.guide
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



		const emb1ed = new MessageEmbed()
		.setColor('RED')
		.setDescription(`<a:upup:1009830281252974692> | Veriler hesaplanıyor...`)
		.setTimestamp()

		message.reply({ embeds: [emb1ed] }).then(msg => {

			setTimeout(function() {

				const embed = new MessageEmbed()
				.setTitle('Bot Bilgi')
				.setColor('GREEN')
				.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
			.addFields(
		{ name: '**• | Sahip**', value: `<@884451720510451753> | ${owner}`},
		{ name: '**• | İşlemci**', value: `${cpu}`},
		{ name: '**• | İşletim Sistemi**', value: `${platform}`, inline: true},
		{ name: '<a:Saat:1009825583221444608> **Çalışma Süresi**', value: `${Math.floor(up / 60)} Dakika`, inline: true},
		{ name: '**• | Versiyon**', value: `${ver}`, inline: true},
		{ name: '**• | Sunucu Sayısı**', value: `${client.guilds.cache.size}`},
		{ name: '<:kullanici:1009822857511043092> **Kullanıcı Sayısı**', value: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, inline: true},
		{ name: '<:mesajkanali:1009823555137052772> **Kanal Sayısı**', value: `${client.channels.cache.size}`, inline: true},
		{ name: '<:Bot:1009825915125108796> **Bot Versiyon**', value: `**BETA**`, inline: true},
		{ name: '<:discordjs:1009823892212293762> **Discord.JS Versiyon**', value: `${version}`, inline: true},
		{ name: '<:nodejs:1009824078300975195> **Node Versiyon**', value: `${process.version}`, inline: true},
		{ name: '**• | RAM Kullanımı**', value: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()}/${1024 * 4}MB`},

		)

		msg.edit({ embeds: [embed], components: [row] })

			}, 3000);

		});
	
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "i"
};
