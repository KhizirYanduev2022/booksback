
const express = require('express')
const mongoose = require('mongoose')
const Books = require('../models/books.models')



module.exports.booksController = {

createBooks:(req,res)=>{
    Books.create(req.body,(err,data)=>{
        if(err){
            res.json('err')
        }else{
            res.json(data)
        }
    })
},

deleteBooks:(req,res)=>{
    Books.findByIdAndDelete(req.params.id,(err,done)=>{
    if(err){
        res.json(err)
    }else{
        res.json(done)
    }
    })
},

updateBooks:(req,res)=>{
    Books.findByIdAndUpdate(req.params.id,{author:req.body.author},(err,data)=>{
        if(err){
            res.json('err')
        }else{
            res.json(data)
        }  
    })


},

findBooks:(req,res)=>{
    Books.findById(req.params.id,(err,data)=>{
        if(err){
            res.json('err')
        } else{
            res.json(data)
        }
    })
},

findAllBooks:(req,res)=>{
    Books.find({},(err,data)=>{
        if(err){
            res.json('err')
        } else{
            res.json(data)
        }
    })
}

}


