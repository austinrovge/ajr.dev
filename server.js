import path from 'path'
import express from 'express'

const app = express()
const PORT = 8080

app.use(express.static(path.join(__dirname, 'src')))
app.use('/favicon.ico', express.static(path.join(__dirname, 'src', 'assets', 'favicon.ico')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'))
})

app.listen(PORT, () => {
   console.log(`Server listening on port: ${PORT}`)
})
