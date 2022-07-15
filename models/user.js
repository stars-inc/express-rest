const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  emeil: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  cart: {
    items: [
      {
        count: {
          type: Number,
          required: true,
          default: 1
        },
        wishId: {
          type: Schema.Types.ObjectId,
          ref: 'Wish',
          required: true
        }
      }
    ]
  }
})

module.exports = model('User', userSchema)