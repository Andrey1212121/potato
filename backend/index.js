require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./router/index')
const errorHandler = require('./middleware/ErrorHandlingMilddeWare')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

// Обработка ошибок, последний Middleware
app.use((err, req, res, next) => {
    errorHandler(err, req, res, next)
})

app.get('/', (req, res) => {
    res.status(200).json({message: 'WORKING!'}) //код 200 - все прошло хорошо

})
 
 
const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('Server started on port ${PORT}'))
    } catch (e){
        console.log(e)
    }
}


start()