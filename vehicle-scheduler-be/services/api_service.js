require("dotenv").config();
const axios = require("axios");
const base_url = "http://4.224.186.213/evaluation-service";
const headers = {
    Authorization: `Bearer ${process.env.access_token}`
};
async function getDepots() {
  const response = await axios.get(`${base_url}/depots`,{ headers });
  return response.data;    
}
async function getVehicles() {
    const response = await axios.get(`${base_url}/vehicles`,{ headers });
    return response.data;
}
module.exports = {
    getDepots,
    getVehicles
};