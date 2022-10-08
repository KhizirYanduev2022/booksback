const mongoose = require('mongoose')
const express = require('express')
const{genremodels} = require('../models/genre.models')
const genre = require('../models/genre.models')

module.exports.genreController = {
genreCreate:(req,res)=>{
    Genre.create({name:req.body.name,
    description:req.body.description},(err,data)=>{
        if(err){
            res.json('err')
        } else{
            res.json(data)
        }
    })
}


}