// external modules
const inquirer = require('inquirer');
const chalk = require('chalk');

// internal modules
const fs = require('fs');

const operation = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'O que você deseja fazer:',
      choices: ['Criar Conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair'],
    },
  ]).then((answer) => {
    const { action } = answer;
    if (action === 'Criar Conta') {
      createAccount();
    }
  }).catch((err) => console.log(err));
};

operation();

const createAccount = () => {
  console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'));
  console.log(chalk.green('Defina as opções da sua conta a seguir'));
  buildAccount();
};

const buildAccount = () => {
  inquirer.prompt([
    {
      name: 'accountName',
      message: 'Digite um nome para a sua conta:',
    },
  ]).then((answer) => {
    const { accountName } = answer;

    console.info(accountName);

    if (!fs.existsSync('src/accounts')) {
      fs.mkdirSync('src/accounts');
    }

    if (fs.existsSync(`src/accounts/${accountName}.json`)) {
      console.log(chalk.bgRed.black('Essa conta já existe, escolha outro nome!'));
      buildAccount();
      return;
    }

    fs.writeFileSync(`src/accounts/${accountName}.json`, '{"balance": 0}', (err) => console.log(err));

    console.log(chalk.green('Parabéns, a sua conta foi criada!'));
    operation();
  }).catch((err) => console.log(err));
};

module.exports = buildAccount;