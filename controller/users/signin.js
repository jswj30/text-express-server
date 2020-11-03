const { users } = require('../../models');
const session = require('express-session');

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 로그인을 했을 때, 회원정보를 데이터베이스에서 확인하고, 
    // 회원의 id를 session에 담아주도록 구현하세요.
    const { email, password } = req.body;

    users.findOne({
      where: {
        email: email,
        password: password
      }
    })
      .then((result) => {
        if (result) {
          req.session.userid = result.id;
          // res.cookie('id', result.id);
          res.status(200).send({ id: result.id });
        } else {
          res.status(404).send('unvalid user');
        }
      })

  }
};
