const commands = {
  review: (message, args) => {
    const branchName = args[0];

    if (branchName.indexOf("plt-") !== -1) {
      message.reply(
        `Verificando status da branch ${branchName.toUpperCase()}...`
      );
    } else {
      message.reply(`PLT inválida, verifique o nome da sua branch!`);
    }
  },
  state: (message, args) =>{
  
  },
  please: (message, args) =>{
    const branchName = args[0]

    if (branchName.indexOf("plt-") !== -1) {
      message.reply(
        `Review pendente:
         https://docato.atlassian.net/browse/${branchName.toUpperCase()}
         @everyone`
      );
    } else {
      message.reply(`Nome de PLT inválido, verifique o nome em envia o comando novamente!`);
    }
  }
};
module.exports = commands;