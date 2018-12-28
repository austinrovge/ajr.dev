import path from 'path'
import express from 'express'

const app = express()
const PORT = 8080

app.use(express.static(path.join(__dirname, '..', 'client')))
app.use('/favicon.ico', express.static(path.join(__dirname, '..', 'client', 'assets', 'favicon.ico')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'))
})

app.listen(PORT, () => {
   console.log(`Server listening on port: ${PORT}`)
})
