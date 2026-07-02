const express = require("express");
const app = express();
app.use(express.json());

const scheduleroute = require("./routes/schedule_route");
app.use("/schedule",scheduleroute);
app.get("/",(req,res)=>{
    res.send("Vechicle Schduler");
});
app.listen(3000,()=>{
    console.log("Server running port 3000");
});