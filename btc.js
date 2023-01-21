const axios = require('axios');

// Declare async function to get Bitcoin exchange rate
async function getBitcoint() {
    // Get the currency specified as a command line argument, default to EUR
    const currency = process.argv[2] 
        ? process.argv[2].toUpperCase() 
        : "EUR";

    try{
        // Endpoint for CoinDesk API
        const endpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json'
        // Make a GET request to the API
        const { data } = await axios.get(endpoint)

        // Check if the requested currency is supported by the API
        if (!data.bpi[currency]) {
            throw new Error('Devise inconnue only EUR / USD /GBP')
        }
        // Get the exchange rate and last update time from the API
        const rate = data.bpi[currency].rate;
        const updatedTime = data.time.updated;
        // Log the exchange rate and time to the console
        console.log(`> 1 BITCOIN (BTC) = ${rate} ${currency} (Time : ${updatedTime})`);
    }catch(error){
        // Log any errors to the console
        console.error(error.toString());
    }
}

// Call the function
getBitcoint()