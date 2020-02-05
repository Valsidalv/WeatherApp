const key = "tpbYxGlRX0MaeYJmB2CsfAtlfT79e0ae";

async function getCity(city) {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

async function getWeather(id) {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

/*getCity('Stavanger').then(data => { 
    return getWeather(data.Key)
}).then(data => console.log(data)).catch(err => console.log(err)); */

//getWeather("260665");