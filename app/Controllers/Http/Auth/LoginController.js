'use strict'

class LoginController {
  index ({ view, auth }) {
    auth.logout();
    return view.render('auth.login')
  }

  async login ({ request, response, session, auth }) {
    const { email, password } = request.all()

    await auth.attempt(email, password)

    if (session.get('_intended', false)) {
      let redirect = response.redirect(session.get('_intended'))

      session.forget('_intended')

      return redirect
    }

    return response.route('home')
  }
}

module.exports = LoginController
