# Multiple-App-Controler
1.Clone the repository <br>
2. `cd Multiple-App-Controler` <br>
3. run `npm instll` to downlode the packages <br>
4. run `npm start` to start the project locally <br>

The project will open on portno 3002.<br>

Routs:<br>
`------------------------------------------------------------------------------------------------------`<br>
GET:<br>
`-----------------------------------------------------------------------------------------------------`<br>
`/controler/` <br>

Response: `Array of user object`<br>
`-------------------------------------------------------------------------------------------------------`<br>
`/controler/app-list`<br>
Response: `Array of application`<br>
`------------------------------------------------------------------------------------------------------`<br>
`/controler/role-list`<br>
Response: `Array of Job role list`<br>
`-------------------------------------------------------------------------------------------------------`<br>
`/user/info`<br>
Authorization: `Auth token`<br>

response : Object of specific user info<br>
`-------------------------------------------------------------------------------------------------------`<br>
`--------------------------------------------------------------------------------------------------------`<br>
POST :<br>
`------------------------------------------------------------------------------------------------------`<br>
`user/signup`<br>
Content-Type: application/json<br>
<div>
Request body:
{
    "user_name":"name",
    "first_name":"First Name",
    "last_name":"Last Name",
    "app_name":"appName",
    "type_name":"TypeName",
    "password":password,
    "email":"Email"
}
</div>
response: `sucess`<br>
`---------------------------------------------------------------------------------------------------------`<br>
`/user/login`<br>
Content-Type: application/json<br>
<div>
Request body:
{
    "email":"rana1@gmail.com",
    "password":123456
    
}
</div>
response: `token` on sucess login and `Invalid user` on failed<br>
`-----------------------------------------------------------------------------------------------------------`<br>
`/controler/update`<br>
Content-Type: application/json<br>
<div>
Request body:
{
    "user_id":8,
    "app_name":"du",
    "type_name":"superadmin"
}
</div>
response: `user updated` on sucess update and  `Invalid user` on failed<br>

`--------------------------------------------------------------------------------------------------------------`<br>
  
