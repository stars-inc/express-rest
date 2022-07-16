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

userSchema.methods.addToCart = function(wish) {
  const items = [...this.cart.items]
  const index = items.findIndex(w => {
    return w.wishId.toString() === wish._id.toString()
  })

  if (index >= 0) {
    items[index].count += 1
  } else {
    items.push({
      wishId: wish._id,
      count: 1
    })
  }

  this.cart = { items }

  return this.save()
}

module.exports = model('User', userSchema)