#!/usr/bin/env node

const chalk = require('chalk')
const program = require('commander')
const version = require('../package.json').version

program
  .version(version)

program
  .command('create <name>')
  .description('Create a new Pangolin project')
  .action(name => {
    require('../lib/commands/create')(name)
  })

program
  .arguments('*')
  .action(cmd => {
    program.outputHelp()
    console.log(chalk`  Unknown command {red ${cmd}}.`)
  })

program.parse(process.argv)
