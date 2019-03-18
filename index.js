// implement your API here
const express = require('express');
const router = require('./router');

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api', router);

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`App running on port ${PORT}`);
})