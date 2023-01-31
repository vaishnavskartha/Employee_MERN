var express=require("express");
const { EmployeeModel } = require("../model/employee");
const router = express.Router();

//Add New
router.post('/api/employeelist',async(req,res)=>{
    var data=req.body;
    var employee = new EmployeeModel(data);
    await employee.save((err,data)=>{
        if(err){
            res.json({"Status":"Error","Error":err});
        }
        else{
            res.json({"Status":"Success","Data":data});
        }
    });
    console.log(data);
    
})

//View all
router.get('/api/employeelist',(req,res)=>{
    EmployeeModel.find(
       (err,data)=>{
           if(err){
               res.json({"Status":"Error","Error":err});
           }
           else{
               res.json(data);
           }
       }
   )
})

//SEARCH
router.get('/api/employeelist/:id',(req,res)=>{
    var id=req.params.id;
    EmployeeModel.find({"_id":id},
        (err,data)=>{
            if(err){
                res.json({"Status":"Error","Error":err});
            }
            else{
                res.json(data);
            }
        }
    )
})

//Update

router.put('/api/employeelist',(req,res)=>{
    var name = req.body.name;
    var data = req.body;
    EmployeeModel.findOneAndUpdate(
        {"name":name},data,(err,data)=>{
            if (err) {
                res.json({"Status":"Error","Error":err})
            } else {
                res.json({"Status":"Updated","Data":data})
            }
        }
    )
})

//Delete

router.delete('/api/employeelist/:id',(req,res)=>{
    var id=req.params.id;
    var data = req.body;
    EmployeeModel.findOneAndDelete(
        {"_id":id},data,(err,data)=>{
            if (err) {
                res.json({"Status":"Error","Error":err})
            } else {
                res.json({"Status":"Deleted","Data":data})
            }
        }
    )
})
module.exports= router;