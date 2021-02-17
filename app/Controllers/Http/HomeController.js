'use strict'

const Post = use('App/Models/Post')

class HomeController {
  async index ({ view, request }) {
    let posts = await Post.query()
      .with('user')
      .with('tag')
      .fetch()

    return view.render('index', {
      posts
    })
  }
}

module.exports = HomeController
