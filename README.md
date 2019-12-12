# Multiple-App-Controler
1.Clone the repository <br>
2. `cd Multiple-App-Controler` <br>
3. run `npm instll` to downlode the packages <br>
4. run `npm start` to start the project locally <br>

The project will open on portno 3002.

Routs:<br>
`------------------------------------------------------------------------------------------------------`
GET:
`-----------------------------------------------------------------------------------------------------`
`/controler/`

Response: `Array of user object`
`-------------------------------------------------------------------------------------------------------`
`/controler/app-list`
Response: `Array of application`
`------------------------------------------------------------------------------------------------------`
`/controler/role-list`
Response: `Array of Job role list`
`-------------------------------------------------------------------------------------------------------`
`/user/info`
Authorization: `Auth token`

response : Object of specific user info
`-------------------------------------------------------------------------------------------------------`
`--------------------------------------------------------------------------------------------------------`
POST :
`------------------------------------------------------------------------------------------------------`
`user/signup`
Content-Type: application/json
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
response: `sucess`
`---------------------------------------------------------------------------------------------------------`
`/user/login`
Content-Type: application/json
Request body:
{
    "email":"rana1@gmail.com",
    "password":123456
    
}
response: `token` on sucess login and `Invalid user` on failed
`-----------------------------------------------------------------------------------------------------------`
`/controler/update`
Content-Type: application/json
Request body:
{
    "user_id":8,
    "app_name":"du",
    "type_name":"superadmin"
}

response: `user updated` on sucess update and  `Invalid user` on failed

`--------------------------------------------------------------------------------------------------------------`
  
