const express = require('express');
const cors = require('cors');
const db = require('./util/db');
const body_parser = require('body-parser');


const { getUser,applicationList,userRole,addUser } = require('./Routs/controler')

//creating express instance
const app = express();

// usin cors module
app.use(cors());
app.use(body_parser.json())


//controler route
app.get('/controler/',getUser);
app.get('/controler/application',applicationList);
app.get('/controler/job-type',userRole);
app.post('/controler/add-user',addUser);



const PORT = 3002;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})


//Actions
/**
 * 
 * 1-> add user
 * 2-> change user role
 * 3-> change working area of a user
 * 4-> delete user
 * 5 -> get all user
 * 6 -> all application list
 * 
 */

