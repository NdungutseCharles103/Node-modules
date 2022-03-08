const express = require('express');
const app = express();
const route = require('./router')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

const port = 2000;

app.use('/api', route);
//home route
app.get('/', (req, res) =>{
    res.send("Routing App");
})

app.listen(port, () =>{console.log(`listening on port http://localhost: ${port}`)})
;