import express from 'express'
import routerFarmacia from './routers/farmacia.router.js'

const  app = express()
app.use(express.json())
const  PORT = 5000


app.use('/farmacia', routerFarmacia)

app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.listen(PORT, () => {
    console.log('Servidor  corriendo por el PUERTO ' , PORT)
})

