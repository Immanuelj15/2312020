const express = require("express");
const app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Vechicle Schduler");
});
app.listen(3000,()=>{
    console.log("Server running port 3000");
});