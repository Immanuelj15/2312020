const axios = require("axios");
require("dotenv").config();
const access_token = process.env.access_token;
async function Log(stack,level,packageName,message){
    try{
        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack,
                level,
                package : packageName,
                message
            },
            {
                headers:{
                    Authorization : `Bearer ${access_token}`
                }
            }

        );
        console.log(response.data);
    } catch (err){
        console.log(err.response?.data || err.message);
    }
}

module.exports = Log;