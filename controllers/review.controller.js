const mongoose = require('mongoose')
const express = require('express')
const Review = require('../models/review.models')


module.exports.reviewController={
createReview:(req,res)=>{
    Review.create(req.body,(err,data)=>{
 if(err){
    res.json('err')
 }else{
    res.json(data)
 }
    }).populate('books')
},

finAllreview:(req,res)=>{
    Review.find({books:req.params.id},(err,data)=>{
            res.json(data)
        }
    ).populate('books')
    
   
}

}