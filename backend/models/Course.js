const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true
    },

    subject:{
        type:String,
        required:true
    },

    grade:{
        type:String,
        required:true
    },

    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    fee:{
        type:Number,
        default:0
    },

    schedule:{
        type:String
    },

    description:{
        type:String
    },

    status:{
        type:String,
        enum:["Active","Inactive"],
        default:"Active"
    }
},
{
    timestamps:true
});

module.exports = mongoose.model("Course",courseSchema);