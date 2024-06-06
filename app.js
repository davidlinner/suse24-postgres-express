import express from 'express';

import studentsRouter from './routes/applications.js';

const app = express();

app.use(express.json()); // for json payloads
app.use(express.urlencoded({ extended: false })); // for x-url-encoded form payloads

app.use('/applications', studentsRouter);

export default app;
