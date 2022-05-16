const express = require('express');
const router = require("./src/routes/api");
const app = new express();

// Security Middleware
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Request Rate Limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100
});
app.use(limiter);



app.use("/api/v1",router);
app.use('*',(req,res)=>{
    res.status(404).json({status:"Fail",data:"Not Found"});
});


module.exports = app;