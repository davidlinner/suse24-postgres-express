import express from 'express';

import applicationsRouter from './routes/applications.js';
import personsRouter from './routes/persons.js';

const app = express();

app.use(express.json()); // for json payloads
app.use(express.urlencoded({ extended: false })); // for x-url-encoded form payloads

app.use('/applications', applicationsRouter);
app.use('/persons', personsRouter);

export default app;
