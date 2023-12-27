const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
const db = require('./db.config');
const { removeAllListeners } = require('nodemon');
const PORT = process.env.PORT || 5000;

//controller import
const userRouter = require('./controller/user.controller')


app.use(express.json());  //middleware
app.use(express.urlencoded({extended:true}))
db.dbConfig();


app.get('/',(req,res) => {
    // res.send("this is a test data...")
    res.json({
        status: 200,
        message:"your server is up and running",
        
    })
})

app.use('/api/v1/users',userRouter)


app.listen(PORT,()=>{
    console.log(`listening on port number -> ${PORT}`);
})


// users

// create user
// findall
// PaymentRequestUpdateEventdelete
// findone
// delete removeAllListenersfind active users



