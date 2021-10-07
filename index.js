
const axios = require('axios')
import fetch from 'node-fetch';
const response = await fetch("https://restcountries.com/v2/all");
const data = await response.json();
const languages = new Set();
const area = []


//  How many languages are there in the countries API
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




// Find the 10 most largest countries
function allLang(data) {
    for (let Obj of data) {
        if (Obj.languages) {
            Object.values(Obj.languages).forEach(e => languages.add(e))
        }
    }
    var size = languages.size;
    console.log(languages);
}
// allLang(data)

function area10() {
    for (let obj of data) {
        if (obj.area) {
            area.push({ country: obj.name, Area: obj.area })
        }

    } console.log(area)
}
area10()

