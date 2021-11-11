// API Automation using Javascript

// Library supertest
import supertest from 'supertest';

// request URL to navigate the automation
const request = supertest('https://api.weatherbit.io/v2.0/');

// API Key
// Can be use only to the case A
const TOKEN = '64d911f11e544466a7ff86005a2a49e2';

// Declare const latitude and longitude
const lat = '40.730610';
const lon = '-73.935242';

// Declare const postal_code
const postal_code = '26354';

describe('Testing', () => {

    // Method GET to get lat and lon
    it('GET /current?lat={lat}&lon={lon}', () => {
        request.get(`current?lat=${lat}&lon=${lon}&key=${TOKEN}`).then((err,res) => {
            console.log(err);
            console.log(res.body);
        });
    });

    // Method GET to get 3 hours forecast 
    // My API Key does not have access to this endpoint, 
    // replace with another API if you want to access this endpoint

    it('GET /forecast/3hourly?postal_code={postal_code}', () => {
        request.get(`forecast/3hourly?postal_code=${postal_code}&key=${TOKEN}`).end((err,res) => {
            console.log(err);
            console.log(res.body);
        });
    });

});