require('dotenv').config()
const express = require('express');
const cors = require('cors');
const db = require('./util/db');
const body_parser = require('body-parser');
const morgan = require('morgan');


const { getUser,applicationList,userRole,updateUser} = require('./Routs/controler')
const { signUp,login } = require('./Routs/user')

//creating express instance
const app = express();

// usin cors module
app.use(cors());
app.use(body_parser.json())
app.use(morgan('dev'))


//controler route
app.get('/controler/',getUser);
app.get('/controler/application',applicationList);
app.get('/controler/job-type',userRole);
app.post('/controler/update',updateUser);

//user route
app.post('/user/signup',signUp);
app.post('/user/login',login);




const PORT = 3002;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})


//Actions
/**
 * 
 * 1-> add user  *done*
 * 2-> change user role  *done*
 * 3-> change working area of a user *done*
 * 4-> delete user
 * 5 -> get all user *done*
 * 6 -> all application list *done*
 * 
 */

