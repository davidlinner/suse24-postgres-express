import express from 'express';
import sql from '../db/client.js'

const router = express.Router();

router.get(
    '/',
    async function (req, res) {
        const result = await sql`select * from persons`;
        res.status(200).send(result);
    });

router.get('/:id', async function (req, res) {
    const id = req.params.id;
    try {
        const rows = await sql`select * from persons a where a.id = ${id}`;

        if(rows.length < 1){
            res.sendStatus(404);
            return;
        }

        res.status(200).send(rows[0]);
    } catch (err){
        console.error(err);
        res.sendStatus(500);
    }
});

export default router;
