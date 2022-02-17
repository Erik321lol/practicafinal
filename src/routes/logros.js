const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');


// personas registradas ultimo grado academico

router.get('/logroac', (req, res) => {
    mysqlConnection.query('SELECT distinct persona.cod_persona, nombre1, apellido1, logro_academico.titulo, logro_academico.institucion, max(logro_academico.anio) as anio from persona inner JOIN logro_academico on persona.cod_persona = logro_academico.cod_persona group by logro_academico.cod_persona;', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
})



// para logros academicos

router.get('/logro', (req, res) => {
    mysqlConnection.query('select * from tipo_logro_academico;', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
})


router.post('/logro', (req, res) => {
    console.log([req.body]);
    mysqlConnection.query('INSERT INTO tipo_logro_academico set ?', [req.body], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})

router.delete('/logro/:nombre', (req, res) => {
    console.log('nombre = ', [req.params.nombre]);
    mysqlConnection.query('DELETE FROM tipo_logro_academico where nombre = ?', [req.params.nombre], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})


//Actualizacion de datos academicos


router.get('/logropersona', (req, res) => {
    mysqlConnection.query('select * from logro_academico;', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
})

router.post('/logropersona', (req, res) => {
    console.log([req.body]);
    mysqlConnection.query('INSERT INTO logro_academico set ?', [req.body], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})


//actualizar logro


router.put('/logro/:nombre', (req, res) => {
    console.log([req.body]);
    mysqlConnection.query('UPDATE tipo_logro_academico set ? WHERE nombre = ?', [req.body, req.params.nombre], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})


module.exports = router;