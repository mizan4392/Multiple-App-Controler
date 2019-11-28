const express = require("express");
const db = require('../util/db');

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



exports.addUser = (req,res) =>{

  const newUser = {
    user_name:req.body.user_name,
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    app_name:req.body.app_name,
    type_name:req.body.type_name
 }
  const ADD_USER = `INSERT INTO user(user_name,first_name,last_name,app_id,type_id) VALUES ('${newUser.user_name}', '${newUser.first_name}','${newUser.last_name}', (SELECT app_id FROM application WHERE app_name = '${newUser.app_name}'),(SELECT type_id FROM user_type WHERE type_name='${newUser.type_name}'));`

  db.query(ADD_USER,(error,result)=>{
    if(error){
      console.log(error)
      res.status(400).json({error})
    }else{
      return res.status(201).json({ result: result });
    }
  })

}

exports.updateUser = (req,res) =>{
  const updateUser = {
    app_id:req.body.app_name,
    type_id:req.body.type_name
  }
  const UPDATE_USER = `UPDATE user SET app_id=(SELECT application.app_id FROM application WHERE application.app_name = 'diu'), type_id=((SELECT user_type.type_id FROM user_type WHERE user_type.type_name = 'admin') WHERE user_id='6';`
}



