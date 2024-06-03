import express from 'express';

import studentsRouter from './routes/students.js';

const app = express();

app.use(express.json()); // for json payloads
app.use(express.urlencoded({ extended: false })); // for x-url-encoded form payloads

app.use('/students', studentsRouter);

export default app;
