# Multiple-App-Controler
1.Clone the repository <br>
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
`
Request body:<br>
{<br>
    "user_name":"name",<br>
    "first_name":"First Name",<br>
    "last_name":"Last Name",<br>
    "app_name":"appName",<br>
    "type_name":"TypeName",<br>
    "password":password,<br>
    "email":"Email"<br>
}<br>
`
response: `sucess`<br>

---
`/user/login`<br>
Content-Type: application/json<br>
`
Request body:<br>
{<br>
    "email":"rana1@gmail.com",<br>
    "password":123456<br>
    
}<br>
`

response: `token` on sucess login and `Invalid user` on failed<br>

---
`/controler/update`<br>
Content-Type: application/json<br>
`
Request body:<br>
{<br>
    "user_id":8,<br>
    "app_name":"du",<br>
    "type_name":"superadmin"<br>
}<br>
`

response: `user updated` on sucess update and  `Invalid user` on failed<br>

---
  
