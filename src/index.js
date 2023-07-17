// external modules
const inquirer = require('inquirer');

// internal modules
const fs = require('fs');
const createAccount = require('./account/createAccount');

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
