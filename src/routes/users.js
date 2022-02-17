const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//funciones para la tabla personas

router.get('/persona', (req, res) => {
    mysqlConnection.query('select * from persona;', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
})

router.get('/persona/:usuario', (req, res) => {
    const { usuario } = req.params;
    mysqlConnection.query('select contrasena from persona where usuario = ?', [usuario], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    })
})

router.get('/personaesp/:usuario', (req, res) => {
    const { usuario } = req.params;
    mysqlConnection.query('select * from persona where usuario = ?', [usuario], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    })
})

router.post('/persona', (req, res) => {
    console.log([req.body]);
    mysqlConnection.query('INSERT INTO persona set ?', [req.body], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})

router.delete('/persona/:id', (req, res) => {
    console.log('id = ', [req.params.id]);
    mysqlConnection.query('DELETE FROM persona where cod_persona = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})

router.put('/persona/:usuario', (req, res) => {
    console.log('id = ', [req.params.usuario]);
    mysqlConnection.query('UPDATE persona set ? WHERE usuario = ?', [req.body, req.params.usuario], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})



module.exports = router;