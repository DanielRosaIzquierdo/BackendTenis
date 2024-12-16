const express = require('express')
const cors = require('cors')
const app = express()
const port = PORT = process.env.PORT || 3000;

app.use(cors())

app.use(express.json())

const v1Router = require('./v1/routes/routes')


app.use('/api/v1/partidos', v1Router);


app.listen(port, () => console.log(`App listening on port ${port}!`))