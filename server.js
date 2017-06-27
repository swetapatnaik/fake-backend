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

app.post('/api/CasApiService/GetView', function(req, res) {
    console.log('POST:' + '/api/CasApiService/GetView');
    const customers = JSON.parse(fs.readFileSync('responses/BpaAccountOverview/GetView.json'));
    //console.log('Response: \n' + JSON.stringify(customers));
    res.send(customers);
});

app.post('/api/CasApiService/SaveBo', function(req, res) {
    console.log('POST:' + '/api/CasApiService/SaveBo');
    console.log('I am not implemented, returning empty response');
    res.send({});
});

app.post('/api/CasApiService/CallMethod', function(req, res) {
    console.log('POST:' + '/api/CasApiService/CallMethod');
    console.log('I am not implemented, returning empty response');
    res.send({});
});

app.post('/api/CasApiService/GetAppMenu', function(req, res) {
    console.log('POST:' + '/api/CasApiService/GetAppMenu');
    const menu = JSON.parse(fs.readFileSync('responses/GetAppMenu.json'));
    //console.log('Response: \n' + JSON.stringify(customers));
    res.send(menu);
});

app.post('/api/CasApiService/GetToggles', function(req, res) {
    console.log('POST:' + '/api/CasApiService/GetToggles');
    const customers = JSON.parse(fs.readFileSync('responses/BpaAccountOverview/GetToggle.json'));
    console.log('Response: \n' + JSON.stringify(customers));
    res.send(customers);
});

app.post('/api/CasApiService/GetText', function(req, res) {
    console.log('POST:' + '/api/CasApiService/GetText');
    const customers = JSON.parse(fs.readFileSync('responses/BpaAccountOverview/GetText.json'));
    console.log('Response: \n' + JSON.stringify(customers));
    res.send(customers);
});

app.post('/api/CasApiService/GetRequest', function(req, res) {
    console.log('POST:' + '/api/CasApiService/GetRequest');
    const customers = JSON.parse(fs.readFileSync('responses/BpaAccountOverview/GetRequest.json'));
    //console.log('Response: \n' + JSON.stringify(customers));
    res.send(customers);
});

app.post('/api/CasApiService/GetProfiles', function(req, res) {
    console.log('POST:' + '/api/CasApiService/GetProfiles');
    const profiles = JSON.parse(fs.readFileSync('responses/BpaAccountOverview/GetProfiles.json'));
    res.send(profiles);
});

app.get('/api/CasApiService/Login', function(req, res) {
    console.log('GET:' + '/api/CasApiService/Login');
    const customers = JSON.parse(fs.readFileSync('responses/login.json'));
    console.log('Response: \n' + JSON.stringify(customers));
    res.send(customers);
});

app.get('/api/CasApiService/Logout', function(req, res) {
    console.log('GET:' + '/api/CasApiService/Logout');
    //const customers = JSON.parse(fs.readFileSync('responses/logout.json'));
    //console.log('Response: \n' + JSON.stringify(customers));
    //res.send(customers);
});

app.post('/api/CasApiService/GetViewAsToggle', function(req, res) {
    console.log('POST:' + '/api/CasApiService/GetViewAsToggle');
    const customers = JSON.parse(fs.readFileSync('responses/BpaAccountOverview/GetViewAsToggle.json'));
    console.log('Response: \n' + JSON.stringify(customers));
    res.send(customers);
});

app.post('/api/CasApiService/GetTotalRowCount', function(req, res) {
    console.log('POST:' + '/api/CasApiService/GetTotalRowCount');
    const customers = JSON.parse(fs.readFileSync('responses/BpaAccountOverview/GetTotalRowCount.json'));
    console.log('Response: \n' + JSON.stringify(customers));
    res.send(customers);
});

const server = app.listen(20403, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Silverlight Replace Backend Mock listening at http://%s:%s', host, port);
});
