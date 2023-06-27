const express = require('express');
const app = express();
const routes = require('./routes/index')

// Define your API routes here
app.use('/v1', routes);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
