const prompt = require('prompt-sync')();
const constants = require('./constants.js');

function promptCustomizeSymbols() {
  console.log(
    'Bem Vindo ao jogo da velha!\nEscolha uma opção:\n1) Iniciar o jogo\n2) Customizar as peças',
  );

  constants.arrayOfSymbols[0] = 'X';
  constants.arrayOfSymbols[1] = 'O';

  const userInput = prompt();

  if (userInput === '2') {
    modifySymbols();
  }

  if (userInput !== '1') {
    console.log('Comando inválido.\nIniciando o jogo normalmente.');
  }
}

function modifySymbols() {
  console.log('Quem começa jogando?');
  constants.arrayOfSymbols[0] = prompt();
  console.log('e seu adversário?');
  let symbol = prompt();
  while (symbolIsRepeated(symbol)) {
    symbol = prompt();
  }
  constants.arrayOfSymbols[1] = symbol;
}

function symbolIsRepeated(symbol) {
  if (symbol === constants.arrayOfSymbols[0]) {
    console.log(
      'Você escolheu o mesmo símbolo do seu adversário. Escolha de novo.',
    );
    return true;
  }
  return false;
}

module.exports = promptCustomizeSymbols;
