const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', function (req, res) {
    res.render('index');
});


app.get('/create', async function (req, res) {
    res.render('create')
});

app.post('/create', async function (req, res) {
    let {name, email, phone} = req.body;
    const createdUser = await userModel.create({
        name: name, 
        email: email, 
        phone: phone,
    })
    // res.send(createdUser)
    res.redirect('/read-data');
});


app.get('/read-data', async function (req, res) {
    let allUser = await userModel.find()
    // console.log(allUser)
    res.render('read', {allUser: allUser});
});



app.get('/update/:id', async function (req, res) {
    const userId = req.params.id;
    const user = await userModel.findById(userId);
    res.render('update', { updatedData: user });
});

app.post('/update/:id', async function (req, res) {
    const updatedData = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.redirect('/read-data'); // Redirect to the read data page after updating
});


app.get('/delete/:id', async function (req, res) {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    res.redirect('/read-data');
});


app.listen(3000, ()=> {
    console.log("Server listining");
});