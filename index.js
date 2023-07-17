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

// create an account
const createAccount = () => {
  console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'));
  console.log(chalk.green('Defina as opções da sua conta a seguir'));
};