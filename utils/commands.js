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
};
module.exports = commands;
