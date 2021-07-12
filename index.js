#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const clear =require('clear')
clear()

const data = {
    name: chalk.bold.green("              Mahankali Sai Charan"),
    handle: chalk.white("@saicharan67"),
    work: `${chalk.white("Student at")} ${chalk
        .cyanBright
        .bold
        ("NIT Andhra")}`,
    
    github: chalk.gray("https://github.com/") + chalk.cyanBright("saicharan67"),
    LeetCode: chalk.gray("https://leetcode.com/") + chalk.cyanBright("MaC-02"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.cyanBright("saicharan67"),
    web: chalk.cyanBright("https://saicharan67.github.io/PortFolio"),
    npx: chalk.hex("#FDFF62")("npx") + " " + chalk.white("saicharan"),

    labelWork: chalk.white.bold("          Work:"),
    labelLeetcode: chalk.white.bold("  Leetcode:"),
    labelGitHub: chalk.white.bold("    GitHub:"),
    labelLinkedIn: chalk.white.bold("  LinkedIn:"),
    labelWeb: chalk.white.bold("   Website:"),
    labelCard: chalk.white.bold("              Card:")
};

const Message = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
       
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelLeetcode}  ${data.LeetCode}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``

    ].join("\n"),
    {
        float: 'center',
        padding: 1,
        borderStyle: "double",
        borderColor: "yellow"
    }
);

console.log(Message)

const tip = [
    `${chalk.bold("Tip")}: Try ${chalk.cyan.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);