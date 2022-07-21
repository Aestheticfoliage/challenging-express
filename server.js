const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes')
// initialize the app and create a port

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// api routes
 
app.use('/api', apiRoutes)

// html routes'
app.use('/', htmlRoutes);

// this is starting the server on the port
app.listen(PORT, () => console.log('Listening on PORT: ${PORT}'));
