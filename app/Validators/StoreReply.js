'use strict'

class StoreReply {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      body: 'required'
    }
  }
}

module.exports = StoreReply
