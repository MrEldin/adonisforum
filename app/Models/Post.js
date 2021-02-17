'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
  static boot () {
    super.boot()
    this.addTrait('Slugify')
  }

  tag () {
    return this.belongsTo('App/Models/Tag')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  replies () {
    return this.hasMany('App/Models/Post', 'id', 'parent_id')
  }
}

module.exports = Post
