#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var program = require("commander");
var express = require("express");
var directline = require("./bridge");
program
    .option('-d, --directline <directline>', 'The endpoint/port where offline-directline will run (e.g. "http://127.0.0.1:3000")')
    .option('-b, --bot <bot>', 'The endpoint/port where your bot lives (e.g. "http://127.0.0.1:3978/api/messages")')
    .action(function () {
    if (program.directline && program.bot) {
        var app = express();
        directline.initializeRoutes(app, program.directline, program.bot);
    }
    else {
        console.log('offline-directline requires you to pass the endpoint where it will be hosted on and the endpoint where your bot lives (e.g. "directline -d http://127.0.0.1:3000 -b http://127.0.0.1:3978/api/messages")');
    }
})
    .parse(process.argv);
