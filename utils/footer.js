const end = require('exit-cli');
const packageJSON = require('../package.json');

module.exports = async () => {
    await end({
        github: `Add your github repo link here`,
        twitter: `Add your twitter url here`,
    })
}