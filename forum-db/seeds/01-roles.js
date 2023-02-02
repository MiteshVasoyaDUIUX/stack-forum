/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex, Promise) {
  // Deletes ALL existing entries
  await knex('role').del();

  await knex.raw('ALTER SEQUENCE role_id_seq restart with 3');

  await knex('role').insert([
    { id: 1, name: 'user' },
    { id: 2, name: 'moderator' },
    { id: 3, name: 'administrator' }
  ]);
};
