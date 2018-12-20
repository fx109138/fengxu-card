#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('隋堤倦客'),
  handle: chalk.cyan('fengxu'),
  work: chalk.white('Frontend Engineer at Meituan-Dianping'),
  location: chalk.white('Beijing, China'),
  github: chalk.cyan('https://github.com/fx109138'),
  juejin: chalk.cyan('https://juejin.im/user/585c72fb8d6d810065d820b8'),
  maimai: chalk.cyan('https://maimai.cn/contact/detail/194733023'),
  web: chalk.cyan('http://fengxu.ink'),
  npx: chalk.white('npx fengxu'),
  labelWork: chalk.white.bold('      Work:'),
  labelLocation: chalk.white.bold('  Location:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelJuejin: chalk.white.bold('    Juejin:'),
  labelMaimai: chalk.white.bold('    Maimai:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `                 ${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`
const locating = `${data.labelLocation}  ${data.location}`
const githubing = `${data.labelGitHub}  ${data.github}`
const juejining = `${data.labelJuejin}  ${data.juejin}`
const maimaiing = `${data.labelMaimai}  ${data.maimai}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = 
  heading + newline + newline +
  working + newline +
  locating + newline + newline +
  githubing + newline +
  juejining + newline +
  maimaiing + newline +
  webing + newline + newline +
  carding

console.log(chalk.green(boxen(output, options)))
