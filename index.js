const express = require('express');
const app = express();
const routes = require('./routes/index')
const logger = require('./config/logger');
const morgan = require("./config/morgan")

app.use(morgan.successHandler);
app.use(morgan.errorHandler);

// Define your API routes here
app.use('/v1', routes);

// Start the server
app.listen(process.env.PORT || 3000, () => {
    logger.info(`Listening to port 3000`);
});
