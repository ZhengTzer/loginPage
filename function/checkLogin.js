function checkLogin(info) {
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    },
    {
      firstName: 'Serena',
      email: 'test@ac.com',
      password: '1234'
    }
  ]

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === info.email && users[i].password === info.password) {
      return users[i].firstName
    }
  }
  return `Email incorrect or doesn't exist`
}

module.exports = checkLogin
