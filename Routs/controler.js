const express = require("express");
const db = require('../util/db');


//get all user from database
exports.getUser = (req,res) =>{
  const GET_ALL_USER_DETAILS = 'select user.user_id,user.user_name,user.first_name,user.last_name,user_type.type_name,application.app_name from user inner join user_type on user.type_id = user_type.type_id inner join application on user.app_id = application.app_id;' 

  db.query(GET_ALL_USER_DETAILS,(error,result)=>{
    if(error){
      res.status(400).json({error})
    }else{
      return res.status(201).json({ result: result });
    }
  })
}

// get all application list from database
exports.applicationList = (req,res)=>{
  const GET_ALL_APPLICATION = "select * from application"

  db.query(GET_ALL_APPLICATION,(error,result)=>{
    if(error){
      res.status(400).json({error})
    }else{
      return res.status(201).json({ result: result });
    }
  })
}

// get all job list from database
exports.userRole = (req,res) =>{
  const GET_ALL_USER__ROLE = "select * from user_type"

  db.query(GET_ALL_USER__ROLE,(error,result)=>{
    if(error){
      res.status(400).json({error})
    }else{
      return res.status(201).json({ result: result });
    }
  })
}

// updte user role in  database
exports.updateUser = (req,res) =>{
  
  const updateUser = {
    user_id:req.body.user_id,
    app_name:req.body.app_name,
    type_name:req.body.type_name
  }
  console.log(updateUser)
  const UPDATE_USER = `UPDATE user SET app_id=(SELECT application.app_id FROM application WHERE application.app_name = '${updateUser.app_name}'), type_id=(SELECT user_type.type_id FROM user_type WHERE user_type.type_name = '${updateUser.type_name}') WHERE user_id='${updateUser.user_id}';`

  db.query(UPDATE_USER,(error,result)=>{
    if(error){
      res.status(400).json({error})
    }else{
      console.log(result)
      return res.status(201).json("user updated");
    }
  })
}



