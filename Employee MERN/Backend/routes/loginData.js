const express = require('express');
const {UserModel } = require('../model/user');
const router=express.Router();
const bcrpt=require('bcrypt')
const jwt=require('jsonwebtoken');
const { EmployeeModel } = require('../model/employee');


//Log IN

router.post("/login",async(req,res)=>{
    var username=req.body.username
    var password=req.body.password

    let result=UserModel.find({username:username},(err,data)=>{

        if(data.length>0){
            const passwordValidator=bcrpt.compareSync(password,data[0].password)
            if(passwordValidator){

                jwt.sign({username:username,id:data[0]._id},"myKey",{expiresIn:"1d"},
                
                (err,token)=>{
                    if (err) {
                        res.json({"status":"error","error":err})

                    } else {
                        res.json({"status":"success","data":data,"token":token})
                        
                    }

                })

                

            }
            else{
                res.json({"status":"failed","data":"invalid password"})

            }

        }

        else{
            res.json({"status":"failed","data":"invalid username"})

        }

    })


})

//SignUP

router.post("/signup",async(req,res)=>{

    console.log(req.body)
    let data = new UserModel({ 
        username: req.body.username,
         password: bcrpt.hashSync(req.body.password,10) })
    console.log(data)
    await data.save()


    res.json({"status":"success","data":data})

})





//Add new Employee



router.post("/create",(req,res)=>{

   jwt.verify(req.body.token,"myKey",(err,decoded)=>{
    if(decoded && decoded.username){




        let data = new EmployeeModel({
            name: req.body.name, 
            position: req.body.position,
            location: req.body.location,
            salary: req.body.salary,
        })


          data.save()
          res.json({"status":"success"})


    }
    else{
        res.json({"status":"unauthorised user"})

    }
   })

})


//Update

// router.put("/update",(req,res)=>{

//     jwt.verify(req.body.token,"myKey",(err,decoded)=>{
//      if(decoded && decoded.username){
 
//         var name = req.body.name;
//         var data = req.body;
//         EmployeeModel.findOneAndUpdate(
//             {"name":name},data,(err,data)=>{
//                 if (err) {
//                     res.json({"Status":"Error","Error":err})
//                 } else {
//                     data.save()
//                     res.json({"Status":"success","Data":data})
//                 }
//             }
//         )
        
//      }
//      else{
//          res.json({"status":"unauthorised user"})
 
//      }
//     })
 
//  })

// router.post('/', (req, res) => {
//     let username = req.body.username;
//     let password = req.body.password;
//     UserModel.findOne({ "username": username,"password":password },(err, data) => {
//         if (err) {
//             res.send(err);;
//         }
//         else {
//             res.send(data);
//         }
//     })
// })

module.exports= router;