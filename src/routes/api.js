const express = require('express');
const app = require('../../app');
const HelloController = require("../controllers/HelloController")
const router = express.Router();

router.get('/hello',HelloController.Hello);
router.post('/hello-post',HelloController.HelloPost);



module.exports=router;