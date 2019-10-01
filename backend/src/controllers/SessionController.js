const User = require("../models/User");

//index: retorna uma lista de sessões
//show: lista uma sessão especifica
//store: criar sessão
//update: atualizar sessão
//destroy: remover ou deletar a sessão

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
};
