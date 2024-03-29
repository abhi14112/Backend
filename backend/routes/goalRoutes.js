const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    // res.send("Get goals")
    res.status(200).json({message:'Get goals'})
})
router.post('/',(req,res)=>{
    // res.send("Get goals")
    res.status(200).json({message:'Set goals'})
})
router.put('/:id',(req,res)=>{
    res.status(200).json({message:`Put goals ${req.params.id}`})
})
router.delete('/:id',(req,res)=>{
    res.status(200).json({message:`delete goals ${req.params.id}`})
})
module.exports = router