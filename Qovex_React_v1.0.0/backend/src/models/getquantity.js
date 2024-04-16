const mongoose=require('mongoose');
const quanSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity: {
        type: String, // Changed to Number type
        required: true
    },
    description:{
        type:String,
        required:true
    },
    
},
{
    collection:'getquantity'
});

module.exports=mongoose.model("getquantity",quanSchema)