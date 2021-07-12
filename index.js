#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const clear =require('clear')
clear()

const data = {
    name: chalk.bold.green("                    Mahankali Sai Charan"),
    handle: chalk.white("@saicharan67"),
    work: `${chalk.white("Student at")} ${chalk
        .hex("#2b82b2")
        .bold("NIT Andhra")}`,
    
    github: chalk.gray("https://github.com/") + chalk.green("saicharan67"),
    LeetCode: chalk.gray("https://leetcode.com/") + chalk.cyan("MaC-02"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("saicharan67"),
    web: chalk.cyan("https://saicharan67.github.io/PortFolio"),
    npx: chalk.red("npx") + " " + chalk.white("saicharan"),

    labelWork: chalk.white.bold("       Work:"),
    labelLeetcode: chalk.white.bold("    Leetcode:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
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
        ``,
        `${chalk.italic(
            "I am currently looking for new opportunities,"
        )}`,

    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(Message)