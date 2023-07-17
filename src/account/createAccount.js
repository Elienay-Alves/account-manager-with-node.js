const chalk = require('chalk');

// create an account
const createAccount = () => {
  console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'));
  console.log(chalk.green('Defina as opções da sua conta a seguir'));
};

module.exports = createAccount;