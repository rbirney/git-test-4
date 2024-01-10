'use strict';

import express from 'express';
import logger from "./utils/logger.js";
import routes from './routes.js'; 

const app = express();
const port = 3000;

app.use("/", routes);

app.listen(port, () => logger.info("Your app is listening on port " + port));