'use strict'

class StorePost {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      title: 'required',
      tag: 'required|exists:tags,id',
      body: 'required'
    }
  }
}

module.exports = StorePost
