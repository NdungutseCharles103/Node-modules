let express = require('express');
let app = express();

let districtsLists = [
    {id: 1, name: 'Nyabihu',province: 'Kigali'},
    {id: 1, name: 'Nyabihu',province: 'Kigali'},
    {id: 1, name: 'Nyabihu',province: 'Kigali'}
]
app.get('/api/districts', req,res => {
    res.send(districtsLists)
})
app.post('/api/districts', req, res => {
    console.log(req.body)
    districtsLists.push(req.body)
    res.status(201);
    res.send(districtsLists);
})

port = 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));