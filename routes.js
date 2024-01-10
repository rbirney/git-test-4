'use strict';
import logger from "./utils/logger.js";

import express from 'express';
const router = express.Router();

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';
import playlist from './controllers/playlist.js';

router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);
router.get('/about', about.createView);

router.get('/playlist/:id', playlist.createView);

router.get('/error', (request, response) => response.status(404).end('Page not found.'));

export default router;