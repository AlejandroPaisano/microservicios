const express = require('express');
const router = express();
const conexion=require("../util/peticiones");


router.get("/usuario/:name",(req,res)=>{
    const name= req.params.name
    console.log(name)
    conexion.query("SELECT * FROM users where name like '"+name+"'",(error,results)=>{
        if(error){
            console.log("tipo de error"+error)
        }else{
            data=results.rows
            console.log(data)
            res.render("user", {results:data})
        }
    })
    
})

module.exports=router