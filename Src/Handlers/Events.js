const fs = require('fs');
const chalk = require('chalk')
var AsciiTable = require('ascii-table')
var table = new AsciiTable()
table.setHeading('Events', 'Stats').setBorder('|', '=', "0", "0")

module.exports = (client) => {
    fs.readdirSync('./Src/Events/').filter((file) => file.endsWith('.js')).forEach((event) => {
      	require(`../Events/${event}`);
	table.addRow(event.split('.js')[0], '✅')
    })
	console.log(chalk.greenBright(table.toString()))
};