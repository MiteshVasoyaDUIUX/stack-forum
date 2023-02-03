const db = require('../db/db');
const Joi = require('joi');

const schema = Joi.object({
    display_name: Joi.string().required(),
    email: Joi.string().email(),
    image_uri: Joi.string().uri({
        scheme: [
            /https/
        ]
    }),
    google_id: Joi.string().required(),
    banned: Joi.boolean(),
    role_id: Joi.number().integer()
});

module.exports = {
    findByEmail(email) {
        return db('users').where('email', email).first();
    },

    insert(user) {
        const result = schema.validate(user);
        console.log("Result ", result);

        if (result.error === undefined) {
            return db('users').insert(user);
        } else {
            console.log("In User ", user, "Result.error : ", result.error);
            // return Promise.reject(result.error)
        }
    },

    async update(id, user) {
        // console.log("In Update Part...");
        const returnedData = await db('users').where('id', id).update(user, '*');
        // console.log("RETURNED DATA : ",  returnedData);
        return returnedData;
    }
}