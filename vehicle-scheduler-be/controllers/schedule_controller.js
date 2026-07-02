const apiservice = require("../services/api_service");
exports.home = async (req,res)=>{
    try{
        const depots = await apiservice.getDepots();
        const vechicles = await apiservice.getVehicles();
        res.json({
            depots,
            vechicles
        });
    } catch (err){
        res.status(500).json({
            message:err.message
        });
    }
};