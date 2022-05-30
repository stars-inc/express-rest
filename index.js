import epress from 'express'
import colors from 'colors'

const app = epress()

const PORT = process.env.PORT ?? 5555

app.listen(PORT, () => {
  console.log(`server has been started at port: ${colors.bgMagenta(PORT)}`)
})