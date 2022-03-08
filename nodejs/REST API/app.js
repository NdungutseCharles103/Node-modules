let express = require('express');
let app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended : true}))

let districtsLists = [
    {id: 1, name: 'Nyabihu',province: 'Weatern'},
    {id: 2, name: 'Gasabo',province: 'Kigali'},
    {id: 4, name: 'Nyarugenge',province: 'Kigali'},
    {id: 4, name: 'Kicukiro',province: 'Kigali'}
]
app.get('/api/districts', (req,res) => {
    res.send(districtsLists)
})
app.post('/api/districts', (req, res )=> {
    districtsLists.push(req.body)
    res.status(201);
    res.json(districtsLists);
    res.send(districtsLists);
})

port = 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));