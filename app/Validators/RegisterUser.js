'use strict'

class RegisterUser {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      email: 'required|email|unique:users,email',
      username: 'required|unique:users,username',
      password: 'required'
    }
  }
}

module.exports = RegisterUser
