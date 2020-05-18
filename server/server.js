require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//son funciones que se disparan cada vez que pasara por el codigo
// parse application/json
app.use(bodyParser.json());

app.get('/usuario', function(req, res) {
    let id = req.param.id;

    res.json('get usuario');
});

app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'el nombre es necesario'
        });
    } else {
        res.status(400).json({
            persona: body
        });
    }
    //res.json({
    //    persona: body
    //});


});

app.put('/usuario/:id', function(req, res) {
    //retorna lo que sea que se manda en el url
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.json('delite usuario');
});

app.listen(process.env.PORT, () => {
    //console.log(`Escuchando por el puerto ${process.env.PORT}`);
    console.log('escuchando por el puerto', process.env.PORT);
});