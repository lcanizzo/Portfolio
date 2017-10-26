const express = require('express');
const router = express.Router();

router.get("/", (request, response)=>{
    response.render("index", {layout: 'main'});
    console.log("Home Rendered");
})

module.exports = router