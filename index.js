const axios = require('axios')
axios.get('https://restcountries.com/v3/all')
    .then(resp => {
        let details = resp.data;
        let len = resp.data.length;
        // console.log(len)
        let lang = []
        for (let i = 0; i < len; i++) {
            lang.push(details[i].languages)
        }
        // language in the countries api
        console.log(lang.length)
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });
