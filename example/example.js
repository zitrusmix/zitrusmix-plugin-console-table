'use strict';

const {Zitrusmix} = require('zitrusmix');
const {consoleTable} = require('@zitrusmix/zitrusmix-plugin-console-table');

const mix = new Zitrusmix();
mix.add('city/vie', {name: 'Vienna'});
mix.add('city/bzo', {name: 'Bolzano'});

mix.use(consoleTable());
