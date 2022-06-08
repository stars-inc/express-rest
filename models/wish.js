const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const path = require('path')

class Wish {
  constructor(title, price, img) {
    this.title = title
    this.price = price
    this.img = img
    this.id = uuidv4()
  }

  toJson() {
    return {
      title: this.title,
      price: this.price,
      img: this.img,
      id: this.id
    }
  }

  async save() {
    const wishes = await Wish.getAllData() 
    wishes.push(this.toJson())   

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'data', 'wish.json'),
        JSON.stringify(wishes),
        (err) => {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        }
      )
    })
  }

  static getAllData() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, '..', 'data', 'wish.json'),
        'utf-8',
        (err, content) => {
          if (err) {
            reject(err)
          } else {
            resolve(JSON.parse(content))
          }
        }
      )
    })
  }
}

module.exports = Wish