const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://currencyapi-net.p.rapidapi.com/convert',
  params: {
    from: 'btc',
    to: 'usd',
    amount: '1',
    output: 'JSON'
  },
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'currencyapi-net.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
