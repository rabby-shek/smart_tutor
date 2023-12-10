const express = require('express');
const app = express();
const morgan = require('morgan');
const responsData = [
    {
        "name":"suvo"
    },
    {
        "name":"shek"
    },
];

//for development purpose
app.use(morgan('dev'));

const isLoggedIn = (req,res,next) =>{
    const login = true;
    if(login){
        next();
    }else{
        return res.status(401).json({
            message:"You are not autherized",
        });
    }

};

//the http methods
app.get('/', (req,res) =>{
    res.status(200).send({
        messase:"response data returned",
        responsData,
    })
});

app.get('/users',isLoggedIn, (req,res) =>{
    res.status(200).send({
        messase:"user data returned",
        responsData,
    })
})

//server 
app.listen(6060, () =>{
    console.log(`server is starting at http://localhost:6060`);
});