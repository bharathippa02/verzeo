const express = require("express");
const mongoose = require('mongoose');


var fs = require('fs');

const app = express();

app.use(express.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://admin-bharath:"+ encodeURIComponent("Ippa@123") +"@cluster0.lvknf.mongodb.net/StudentDB", {useNewUrlParser: true, useUnifiedTopology: true});

const studentDataa = mongoose.model('StudentData', { 
    StudentName: String,
    Course: String,
    Age: String,
    Email: String
    
 });


app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/index.html");
})

app.post("/data",function(req,res)
{
    var studentName=req.body.stuName;
    var course=req.body.course;
    var age=req.body.age;
    var email=req.body.studentmail;

    const StudentData=new studentDataa({StudentName:studentName,Course:course,Age:age,Email:email});
    StudentData.save(function (err, data) {
        if (err) return console.error(err);
        res.send("The student data is stored in mongodb");
      });

})


app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  



