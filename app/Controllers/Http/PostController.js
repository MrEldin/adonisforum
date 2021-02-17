'use strict'

const { validateAll } = use('Validator')
const Post = use('App/Models/Post')

class PostController {
  async show ({ view, params }) {
    let post = await Post.query()
      .with('user')
      .with('tag')
      .with('replies')
      .with('replies.user')
      .where('slug', '=', params.slug)
      .firstOrFail()

    return view.render('posts.show', {
      post: post.toJSON()
    })
  }

  create ({ view }) {
    return view.render('posts.create')
  }

  async store ({ request, session, response, auth }) {
    const { title, tag, body } = request.all()

    const post = new Post()

    post.fill({
      title,
      body,
      tag_id: tag,
      user_id: auth.user.id,
    })

    await post.save()

    return response.route('home')
  }
}

module.exports = PostController
