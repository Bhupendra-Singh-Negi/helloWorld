import express from 'express';

const app=express();

app.get('/', function(req, res) {
    res.send('Hello World');
});
app.get('/prince', function(req, res) {
    res.send('Hello Prince!!');
});

app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});