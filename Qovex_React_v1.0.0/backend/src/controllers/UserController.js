
// const User = require("../models/user");


// const addUser = async (req, res, next) => {
//   console.log("write ur functionality here")
 
// }

// exports.addUser = addUser;


const Getquantity = require('../models/getquantity'); 

const AddItem = async(req, res, next) => { 
    console.log(res.body); 
    const {name,quantity,description} = req.body 
    const getquantity = new Getquantity({ name,quantity,description })  
    try {         
        await getquantity.save()   
    } catch(err) { 
        return console.log(err) 
    }     
    return res.status(201).json({getquantity}) 
} 

exports.AddItem = AddItem