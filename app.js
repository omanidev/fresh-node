const express = require('express')

const app = express()

const port = 3003

app.get('/', (req,res)=> {
    res.send('started')
})

app.listen(port , ()=> {
    console.log(`startred at port ${port}`)
})

