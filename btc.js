
const axios = require('axios');

async function getBitcoint() {
    
    const currency = process.argv[2] 
        ? process.argv[2].toUpperCase() 
        : "EUR";

    try{
        const endpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json'
        const { data } = await axios.get(endpoint)

        if (!data.bpi[currency]) {
            throw new Error('Devise inconnue only EUR / USD /GBP')
        }
        const rate = data.bpi[currency].rate;
        const updatedTime = data.time.updated;
        console.log(`> 1 BITCOIN (BTC) = ${rate} ${currency} (Time : ${updatedTime})`);
    }catch(error){
        console.error(error.toString());
    }
}

getBitcoint()


