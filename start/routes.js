'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome').as('home')

Route.get('/auth/register', 'Auth/RegisterController.index')
  .as('auth.register')

Route.post('/auth/register', 'Auth/RegisterController.register')
  .validator('RegisterUser')
  .as('auth.register')

Route.get('/auth/login', 'Auth/LoginController.index')
  .as('auth.login')

Route.post('/auth/login', 'Auth/LoginController.login')
  .validator('LoginUser')
  .as('auth.login')


