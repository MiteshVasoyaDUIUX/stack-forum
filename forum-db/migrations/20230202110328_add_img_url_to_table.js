/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema.table('users', (table) =>{
      table.text('image_uri').notNullable();
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex, Promise) {
    return knex.schema.table('users', (table) =>{
        table.dropColumn('image_uri');
      })
  };
  