# Multiple-App-Controler
1. Clone the repository <br>
2. `cd Multiple-App-Controler` <br>
3. run `npm instll` to downlode the packages <br>
4. run `npm start` to start the project locally <br>

The project will open on portno 3002.<br>

Routs:<br>

---

## GET:<br>

---

`/controler/` <br>

Response: `Array of user object`<br>

---

`/controler/app-list`<br>
Response: `Array of application`<br>

---

`/controler/role-list`<br>
Response: `Array of Job role list`<br>

---
`/user/info`<br>
Authorization: `Auth token`<br>

response : Object of specific user info<br>

---

## POST :<br>
---
`user/signup`<br>
Content-Type: application/json<br>

`Request body:
{
    "user_name":"name",
    "first_name":"First Name",
    "last_name":"Last Name",
    "app_name":"appName",
    "type_name":"TypeName",
    "password":password,
    "email":"Email"
}`
response: `sucess`<br>

---
`/user/login`<br>
Content-Type: application/json<br>
`
Request body:
{
    "email":"rana1@gmail.com",
    "password":123456
}`

response: `token` on sucess login and `Invalid user` on failed<br>

---
`/controler/update`<br>
Content-Type: application/json<br>


`Request body:
{
    "user_id":8,
    "app_name":"du",
    "type_name":"superadmin"
}`

response: `user updated` on sucess update and  `Invalid user` on failed<br>

---
  
