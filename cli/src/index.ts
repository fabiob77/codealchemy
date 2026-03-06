#!/usr/bin/env node

import { Command } from 'commander';
import { CodeAlchemyClient } from '@codealchemy/sdk';
import chalk from 'chalk';

const program = new Command();

program
  .name('CodeAlchemy')
  .description('AI coding assistant CLI')
  .version('1.0.0');

program
  .command('run')
  .description('Run a coding task')
  .argument('<prompt>', 'Natural language prompt')
  .option('-a, --agent <agent>', 'Agent to use', 'base')
  .action(async (prompt, options) => {
    const client = new CodeAlchemyClient({
      apiKey: process.env.CodeAlchemy_API_KEY || '',
      cwd: process.cwd(),
    });

    try {
      const result = await client.run({
        agent: options.agent,
        prompt,
      });
      console.log(chalk.green('Task completed:'), result);
    } catch (error) {
      console.error(chalk.red('Error:'), error.message);
    }
  });

program.parse();

