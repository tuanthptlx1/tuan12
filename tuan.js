const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
function loginUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'user' && password === 'password') {
        document.getElementById('loggedInContent').style.display = 'block';
        document.getElementById('loggedInUser').innerText = username;

        document.getElementById('loginForm').style.display = 'none';

        return false;
    } else {
        alert('Đăng nhập không thành công. Vui lòng kiểm tra tên người dùng và mật khẩu.');
        return false;
    }
}

function logoutUser() {
    document.getElementById('loggedInContent').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';

    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}


const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <style>
    body {
        background-color:blue;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
    
    header {
        color: black;
        text-align: center;
        padding: 1em;
    }
    
    section {
        max-width: 400px;
        margin: 20px auto;
        padding: 20px;
        border: 1px solid #ddd;
    }
    
    form {
        display: flex;
        flex-direction: column;
    }
    
    label {
        margin-bottom: 5px;
    }
    
    input, button {
        margin-bottom: 10px;
        padding: 10px;
    }
    
    button {
        cursor: pointer;
        background-color: #3498db;
        color: #fff;
        border: none;
    }
    
    button:hover {
        background-color: #2980b9;
    }
    
    #loggedInContent {
        text-align: center;
    }
    
    </style>
</head>
<body>
<header>
<h1> XIN CHAO</h1>
</header>

<section>
<div id="loginForm">
    <h2>Đăng Nhập</h2>
    <form onsubmit="return loginUser()">
        <label for="username">Tên người dùng:</label>
        <input type="text" id="username" name="username" required>

        <label for="password">Mật khẩu:</label>
        <input type="password" id="password" name="password" required>

        <button type="submit">Đăng Nhập</button>
    </form>
</div>

<div id="loggedInContent" style="display: none;">
    <!-- Nội dung sau khi đăng nhập sẽ được hiển thị ở đây -->
    <p>Xin chào, <span id="loggedInUser"></span>!</p>
    <button onclick="logoutUser()">Đăng Xuất</button>
</div>
</section>
<script src="script.js"></script>
    
</body>
</html>
`
