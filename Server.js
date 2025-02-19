const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'nisha@89',
    database:'socialfeed'
});

db.connect((err)=>{
    if(err){
        console.log("Database connection failed: " + err);
    }else{
        console.log("Database connected successfully");
    }
});

app.post('/register',(req,res)=>{
    const {username,email,password}=req.body;
    bcrypt.hash(password,10,(err,hashedPassword)=>{
        if(err){
            return res.status(500).send({message:"Error hashing password"});
        }
        const values = [username, email, hashedPassword];
        const sql = "INSERT INTO users (username, email, password) VALUES (?)";
        db.query(sql, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json({ message: "User registered successfully" });
        });
    });
});

app.post('/',(req,res)=>{
    const sql="SELECT * FROM users WHERE email = ?";
    const {email, password} = req.body;
    db.query(sql, [email], (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ message: "Error during login" });
        }
        if (data.length === 0) {
            return res.status(401).send({ message: "Invalid email or password" });
        }
        const user = data[0];
        bcrypt.compare(password, user.password)
            .then((isMatch) => {
                if (isMatch) {
                    res.status(200).send({ message: "Login successful" });
                } else {
                    res.status(401).send({ message: "Invalid email or password" });
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send({ message: "Error during password comparison" });
            });
    });
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});