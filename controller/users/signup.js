const { users } = require('../../models');

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 회원가입을 했을 때, 회원정보를 데이터베이스에 저장하도록 구현하세요.
    const { email, username, password } = req.body;
    users.findOrCreate({
      where: { email: email },
      defaults: {
        username: username,
        password: password,
      }
    })
      .then(([result, created]) => {
        if (created === true) {
          res.status(200).send(result)
        } else {
          res.status(409).send('Already exists user');
        }
      })
  }
};
