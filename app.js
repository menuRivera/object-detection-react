const express = require('express');
const app = express();

// Setup
app.set('port', process.env.PORT || 6969); 
const buildPath = __dirname + '/build/';

// Middleware
app.use(express.static(buildPath));

app.get('/', (req, res) => {
    res.sendFile(buildPath + 'index.html')
})

app.listen(app.get('port'), () => {
    //Este log tiene que ser un callback para estar seguros de que en efecto ya esta escuchando al puerto
    console.log('SERVER RUNNING ON PORT: ', app.get('port'));
});