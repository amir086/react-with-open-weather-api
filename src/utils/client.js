let axios = require('axios');
let appId = '';

let axiosInstance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/forecast/daily?q=Dhaka&appid=${appId}`,
});

export default axiosInstance
