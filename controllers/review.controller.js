const mongoose = require('mongoose')
const express = require('express')
const Review = require('../models/review.models')
const { findByIdAndDelete } = require('../models/review.models')


module.exports.reviewController={
createReview:(req,res)=>{
    Review.create(req.body,(err,data)=>{
 if(err){
    res.json('err')
 }else{
    res.json(data)
 }
    })
},

finAllreview:(req,res)=>{
    Review.find({books:req.params.id},(err,data)=>{
            res.json(data)
        }
    ).populate('books')
    
   
},

deleteReview:(req,res)=>{
    Review.findByIdAndDelete(req.params.id,(err,done)=>{
        if(err){
            res.json('err')
        }else {
            res.json('done')
        }
    })
},

findReview:(req,res)=>{
    Review.find({},(err,data)=>{
        if(err){
            res.json('err')
        }else{
            res.json(data)
        }
    })
}

}