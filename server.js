const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));

app.get('/', function(req, res) {
    res.send('Silverlight Replace Backend Mock, version 0.0.1\n\n' + new Date());
});

app.get('/ping', function(req, res) {
    res.send('success\n\n' + new Date());
});

app.post('/sitecore/api/enrollment/account/register', function(req, res) {
    console.log('POST:' + '/sitecore/api/enrollment/account/register');
    const register = JSON.parse(fs.readFileSync('responses/register.json'));
    res.send(register);
});

app.get('/sitecore/api/enrollment/basket/get', function(req, res) {
    console.log('GET:' + '/sitecore/api/enrollment/basket/get');
    const selection = JSON.parse(fs.readFileSync('responses/selection.json'));
    console.log('Response: \n' + JSON.stringify(selection));
    res.send(selection);
});

app.get('/sitecore/api/enrollment/information/get', function(req, res) {
    console.log('GET:' + '/sitecore/api/enrollment/information/get');
    const information = JSON.parse(fs.readFileSync('responses/information.json'));
    console.log('Response: \n' + JSON.stringify(information));
    res.send(information);
});

app.get('/sitecore/api/enrollment/confirmation/get', function(req, res) {
    console.log('GET:' + '/sitecore/api/enrollment/confirmation/get');
    const confirmation = JSON.parse(fs.readFileSync('responses/confirmation.json'));
    console.log('Response: \n' + JSON.stringify(confirmation));
    res.send(confirmation);
});

const server = app.listen(20403, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Silverlight Replace Backend Mock listening at http://%s:%s', host, port);
});
