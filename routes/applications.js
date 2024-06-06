import express from 'express';
import sql from '../db/client.js'
import applicationSchema from './application.joi.js'
import {createValidator} from 'express-joi-validation';

const router = express.Router();
const validator = createValidator({});

router.get(
    '/',
    async function (req, res) {
        const result = await sql`select * from applications`;
        res.status(200).send(result);
    });

router.get('/:id', async function (req, res) {
    const id = req.params.id;
    try {
        const rows = await sql`select * from applications a where a.id = ${id}`;

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

router.post(
    '/',
    validator.body(applicationSchema),
    async function (req, res) {

        const {
            systemType,
            applicationFormEnclosed,
            plannedCommissioningDate,
            ownerPersonId,
            operatorPersonId,
            locationPersonId,
            installerId
        } = req.body;

        try {
            const result = await sql`
                insert into applications(system_type,
                                         application_form_enclosed,
                                         planned_commissioning_date,
                                         owner_person_id,
                                         operator_person_id,
                                         location_person_id,
                                         installer_id)
                values (${systemType},
                        ${applicationFormEnclosed},
                        ${plannedCommissioningDate},
                        ${ownerPersonId},
                        ${operatorPersonId},
                        ${locationPersonId},
                        ${installerId}) returning id;
            `;

            const [row] = result;

            res.status(200).send(row);
        } catch (error){
            // log the actual problem to the server console
            res.sendStatus(500);
        }
    });


export default router;
