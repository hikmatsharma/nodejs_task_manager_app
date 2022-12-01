const express = require('express')
require('./db/mongoose')
const jwt = require('jsonwebtoken')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000
// middle ware fn
// app.use((req, res, next)=>{
// if(req.method==='GET'){
// res.send('get req are disabled')
// }else{
//     next()
// }
// })
// // for mentenance msg
// app.use((req, res, next)=>{
//         res.status(503).send('under mentanence')
// })


app.use(express.json())

app.use(userRouter)
app.use(taskRouter)


// const myFunction = async()=>{
//     const token = jwt.sign({_id:'12345'},'11111', {expiresIn: '7 days'})
//     console.log(token)
//    const data = jwt.verify(token, '11111')
//     console.log(data)
// }
 
// myFunction()

app.listen(port,()=>{
    console.log('server started on port' + port)
})

// const bcrypt = require('bcryptjs')
// const myFunction = async ()=>{
// const password = 'red12345'
// const hashedPassword = await bcrypt.hash(password, 8)
// console.log(password)
// console.log(hashedPassword)
// const ismatch = await bcrypt.compare('Red12345', hashedPassword)
// console.log(ismatch)
// }
// myFunction()