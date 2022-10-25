const express = require('express');
const mongoose = require('mongoose');
const bookrouter=require('./routes/book-routes');
const chatogaryrouter=require('./routes/chatogary-routes');
const authorrouter=require('./routes/author-routes');
const complainrouter=require('./routes/complains-routes');



const app = express();
const cors=require('cors');


app.use(express.json())
app.use(cors());
app.use('/books',bookrouter);
app.use('/chatogary',chatogaryrouter);
app.use('/author',authorrouter);
app.use('/complain',complainrouter);







mongoose.connect("mongodb+srv://admin:e3QkUwNmd5WwuZFF@cluster0.0ddkkur.mongodb.net/BookStore?retryWrites=true&w=majority"
).then(()=>console.log("Connected to the database")).then(()=>{
    app.listen(8080);
}).catch((err)=>console.log(err));

//mongo user name->admin
//mongo password->st4b8CGTzFSKlBBv
//e3QkUwNmd5WwuZFF