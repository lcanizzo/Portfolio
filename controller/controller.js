const express = require('express');
const router = express.Router();

router.get("/", (request, response)=>{
    response.render("index");
    console.log("Home Rendered");
})

router.get("/work", (req, res)=>{
    res.render("work");
    console.log("Work Renderd");
})

router.get("/contact", (req,res)=>{
    res.render("contact");
    console.log("Contact Rendered");
})

router.get("/bio", (req,res)=>{
    res.render("bio");
    console.log("Bio Renderd");
})

module.exports = router