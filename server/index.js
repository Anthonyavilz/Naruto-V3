const express = require('express')
const cors = require('cors')
const app = express()

const { createJu, getJu, modifyJu, deleteJu } = require('./controllers/userJutsu')

app.use(express.json())
app.use(cors())


app.post('/naruto', createJu)
app.get('/naruto', getJu)
app.put('/naruto/:id', modifyJu)
app.delete(`naruto/:id`, deleteJu)


const port = 1234;
app.listen(port, () => console.log(`Running on port ${port}`));