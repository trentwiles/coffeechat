const express     = require("express");
const User        = require("../models/user");
const   middleware  = require("../middleware/index");
const   Channel     = require("../models/channel");
const sqreen = require('sqreen');


const router      = express.Router();

router.get("/", (req, res)=>{
    if(req.user){
        User.findById(req.user._id).then(()=>res.redirect("/users/@me"))
        .catch((e)=>{
            console.log(e);
            return res.redirect("/users/login");
          
    
        });
    }else{
        res.redirect("/users/login");
    }
});

router.get("/joystick", (req, res)=>{
  if(req.user){
    res.render('joystick',{title:"joystick"}) 
  }else{
    res.redirect("/users/login")
  }
})
router.get("/glitchchordplus", (req, res)=>{
  if(req.user){
    res.render('glitchchordplus',{title:"GlitchChord +"}) 
  }else{
    res.redirect("/users/login")
  }
})
router.get("/market", (req, res)=>{
  if(req.user){
    res.render('marketplace',{title:"Marketplace"}) 
  }else{
    res.redirect("/users/login")
  }
})

router.get("/discovery", (req, res)=>{
  if(req.user){
    res.render('discovery',{title:"server discovery"}) 
  }else{
    res.redirect("/users/login")
  }
})


router.get("/2048", (req, res)=>{
  if(req.user){
    res.render('2048',{title:"2048"}) 
  }else{
    res.redirect("/users/login")
  }
})

router.get("/dino", (req, res)=>{
  if(req.user){
    res.render('dino',{title:"Dino game!"}) 
  }else{
    res.redirect("/users/login")
  }
})
router.get("/report", (req, res)=>{
  if(req.user){
    res.render('report-abuse',{title:"Report User"}) 
  }else{
    res.redirect("/users/login")
  }
})

router.get("/faq", (req, res)=>{
  if(req.user){
    res.render('faq',{title:"faq"}) 
  }else{
    res.redirect("/users/login")
  }
})

module.exports = router;
