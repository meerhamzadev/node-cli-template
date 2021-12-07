#!/usr/bin/env node

const header = require('./utils/header');
const cli = require('./utils/cli');
const footer = require('./utils/footer');

(() => {
    header();
    cli();
    footer();
})()