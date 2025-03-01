const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String,unique:true},
    mobilenumber:{type:String},
    password:{type:String,default:"@123"},
    role:{type:String,enum:['admin','doctor','patient'],default:"doctors"},
    specialisation:{enum:['nerves','heart','lungs','skin',]},
    availableDays:{enum:['Sun','Mon','Tue','Wed','Thur','Fri','Sat'],default:"doctors"},

});

const userModel=mongoose.model('user',userSchema);
module.exports=userModel;