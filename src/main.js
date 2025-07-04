import chalk from 'chalk';
import promptConfig from './prompt.js';
import scaffold from './scaffold.js';

export default async function () {
  console.log(chalk.yellow(`\n🧪 Welcome to testla-screenplay init\n`));
  const answers = await promptConfig();
  await scaffold(answers);
}