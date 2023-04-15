const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');




let serviceAccount = require("./backend/project-el-67b63-firebase-adminsdk-57o93-608a8ada1d.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db=admin.firestore();


let staticPath = path.join(__dirname, "project");
const app = express();

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

app.get("/product", (req, res) => {
    res.sendFile(path.join(staticPath, "product.html"));
})

app.get("/blog", (req, res) => {
    res.sendFile(path.join(staticPath, "blog.html"));
})

app.get("/cart", (req, res) => {
    res.sendFile(path.join(staticPath, "cart.html"));
})

app.get("/check", (req, res) => {
    res.sendFile(path.join(staticPath, "check.html"));
})


app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect('/404');
})

app.listen(3000, () => {
    console.log('listening on port 3000.......');
})