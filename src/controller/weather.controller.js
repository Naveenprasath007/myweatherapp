const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config();
module.exports.Home = async (req,res) =>{
    res.render("home");
}
module.exports.weatherreport = async (req,res)=>{
    try {
        let {city} = req.body
        let url = process.env.BASEURL + 'q=' + city + "&appid=" + process.env.APPID
        let { data } = await axios.get(url);
        // console.log('data is',data)
        console.log('RESULT',data.main.temp);
        let temparature = Math.ceil(data.main.temp -273.15);
        res.render("weatherreport",{city,temparature});
    }
    catch (error) {
        console.log('Error is',error.message);
    }
}



