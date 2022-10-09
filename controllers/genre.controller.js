const mongoose = require('mongoose')
const express = require('express')
const{genremodels} = require('../models/genre.models')
const Genre = require('../models/genre.models')

module.exports.genreController = {
genreCreating:(req,res)=>{
    Genre.create({name:req.body.name,
    description:req.body.description},(err,data)=>{
        if(err){
            res.json('err')
        } else{
            res.json(data)
        }
    })
},

deleteGenre:(req,res)=>{
    Genre.findByIdAndDelete(req.params.id,(err,done)=>{
        if(err){
            res.json('err')
        }else {
            res.json('done')
        }
    })
},

findGenres:(req,res)=>{
    Genre.find({},(err,data)=>{
        if(err){
            res.json('err')
        }{
            res.json(data)
        }
    })
}


}