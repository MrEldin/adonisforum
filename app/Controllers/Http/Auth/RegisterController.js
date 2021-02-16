'use strict'
const { validateAll } = use('Validator')
const User = use('App/Models/User')

class RegisterController {
  index ({ view }) {
    return view.render('auth/register')
  }

  async register ({ request, response, session, auth }) {
    const { email, username, password } = request.all()
    const user = new User()

    user.fill({
      email,
      username,
      password
    })

    await user.save()

    await auth.attempt(email, password)

    return response.route('home')
  }
}

module.exports = RegisterController
