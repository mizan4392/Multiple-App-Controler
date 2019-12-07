const db = require('../util/db')
const jwt = require('jsonwebtoken')

//signup user
exports.signUp = (req, res) => {
  const newUser = {
    user_name: req.body.user_name,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    app_name: req.body.app_name,
    type_name: req.body.type_name,
    password: req.body.password,
    email: req.body.email
  }
  const ADD_USER = `INSERT INTO user(user_name,first_name,last_name,app_id,type_id,password,email) VALUES ('${
    newUser.user_name
  }', '${newUser.first_name}','${
    newUser.last_name
  }', (SELECT app_id FROM application WHERE app_name = '${
    newUser.app_name
  }'),(SELECT type_id FROM user_type WHERE type_name='${newUser.type_name}'),'${
    newUser.password
  }','${newUser.email}');`

  db.query(ADD_USER, (error, result) => {
    if (error) {
      console.log(error)
      res.status(400).json({ error })
    } else {
      return res.status(201).json({ result: result })
    }
  })
}


//login user
exports.login = (req, res) => {
  const USER_DATA = `select * from user where email='${
    req.body.email
  }' and password=${req.body.password};`

  db.query(USER_DATA, (error, result) => {
    if (error) {
      return res.status(500).json({ error: error })
    } else {
      if (result.length >= 1) {
        let secret
        if (result[0].type === 'admin') {
          secret = process.env.ADMIN_SECRET
        } else if (result[0].type === 'user') {
          secret = process.env.USER_SECRET
        } else {
          secret = process.env.SUPER_ADMIN_SECRET
        }
        const token = jwt.sign(
          {
            user_id: result[0].user_id,
            email: result[0].email,
            name: result[0].name,
            type: result[0].type,
            app_id:result[0].app_id
          },
          secret,
          {
            expiresIn: '1h'
          }
        )
        return res.status(201).json({ user: result[0].type, token: token })
      } else {
        return res.status(500).json('Invalid user')
      }
    }
  })
}
