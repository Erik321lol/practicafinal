const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//areas de desempeno registradas

router.get('/areades', (req, res) => {
    mysqlConnection.query('SELECT area_desempenio.cod_area_desempeno as cod, nombre, count(cod_persona) as cantidad from area_desempenio inner join tipo_area_desempeno on area_desempenio.cod_area_desempeno = tipo_area_desempeno.cod_area_desempeno  GROUP BY area_desempenio.cod_area_desempeno;', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
})


//agregar o quitar areas de desempeno

router.get('/area', (req, res) => {
    mysqlConnection.query('select * from tipo_area_desempeno;', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
})

router.post('/area', (req, res) => {
    console.log([req.body]);
    mysqlConnection.query('INSERT INTO tipo_area_desempeno set ?', [req.body], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})

router.delete('/area/:nombre', (req, res) => {
    console.log('nombre =', [req.params.nombre]);
    mysqlConnection.query('DELETE FROM tipo_area_desempeno where nombre =? ', [req.params.nombre], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})


//Actualizar area de desempeno

router.get('/areapersona', (req, res) => {
    mysqlConnection.query('select * from area_desempenio;', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
})


router.post('/areapersona', (req, res) => {
    console.log([req.body]);
    mysqlConnection.query('INSERT INTO area_desempenio set ?', [req.body], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})

router.put('/area/:nombre', (req, res) => {
    console.log([req.body]);
    mysqlConnection.query('UPDATE tipo_area_desempeno set ? WHERE nombre = ?', [req.body, req.params.nombre], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})

module.exports = router;