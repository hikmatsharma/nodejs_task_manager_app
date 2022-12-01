const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    // useNewUrlParser: true,    
    //  useCreateIndex: true,
    //  useFindAndModify: false,
    // useFindAndModify: false
})

// const Task = mongoose.model('Task',{
//     description: {
//         type: String,
//         required: true,
//         trim: true

//     },
//     completed: {
//         type: Boolean,
//         default:  false
//      }
// })
// const task = new Task({
//     description: ' hjhgjhgj gjhgjhgj j gggggg       '
// })
// task.save().then(()=>{
// console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })