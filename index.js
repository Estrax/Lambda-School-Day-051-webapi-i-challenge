// implement your API here
const express = require('express');
const router = require('./router');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use('/api', router);

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`App running on port ${PORT}`);
})