const mongoose=require('mongoose')
const Schema=mongoose.Schema
//class or contructor

const menuSchema=new Schema({
      name:{type:String, required:true},
        type:{type: String ,require:true},
       calories:{type:Number,require:true},
       nutriscore:{type:Number,require:true},
       rating:{type:Number,require:true},
       image:{type:String,require:true},
       price:{type:Number,require:true}
})

module.exports=mongoose.model('Recipe',menuSchema)

