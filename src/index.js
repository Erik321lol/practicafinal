const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors()) //todo el mundo

// Settings
app.set('port', process.env.PORT || 3000);


// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/users'));
app.use(require('./routes/area'));
app.use(require('./routes/logros'));


// Starting server
app.listen(app.get('port'), ()=>{
    console.log('Server on port' + app.get('port'));
})
