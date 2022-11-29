const express = require('express');
const dotenv = require('dotenv');
const weatherRoutes = require('./src/route/weather.route');
const app = express();
const port = process.env.PORT || 5000
dotenv.config();

// app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(weatherRoutes);
app.set('view engine', 'ejs');
app.set('views','./src/views');




app.listen(port, () => {
    console.log('server is running at', port)
})









