const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.json("gett all user infotmation")
})

router.delete('/:id',(req,res,next)=>{
    res.json("delete user infotmation")
})

router.delete('/',(req,res,next)=>{
    res.json("delete all user infotmation")
})

router.post('/',(req,res,next)=>{
    res.json("insert user infotmation")
})

module.exports = router;

