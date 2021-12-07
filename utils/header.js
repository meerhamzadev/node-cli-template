const welcome = require('cli-welcome');
const pckgJSON = require('../package.json');

module.exports = () => {
    welcome({
        title: pckgJSON.name,
        tagLine: `by ${pckgJSON.author.name}`,
        bgColor: `#00ff00`,
        color: `#ffffff`,
        description: pckgJSON.description,
        bold: true,
        clear: true,
        version: pckgJSON.version
    });
}