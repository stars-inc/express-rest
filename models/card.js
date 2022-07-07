const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, '..', 'data', 'card.json')

class Card {
  static async fetch() {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(
            JSON.parse(data)
          )
        }
      })
    })
  }

  static async add(wish) {
    const card = await Card.fetch()

    const index = card.wishes.findIndex(w => w.id === wish.id)
    const candidate = card.wishes[index]

    if (candidate) {
      candidate.count++
      card.wishes[index] = candidate
    } else {
      wish.count = 1
      card.wishes.push(wish)
    }

    card.price += +wish.price

    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, JSON.stringify(card), err => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  }
}

module.exports = Card