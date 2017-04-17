
exports.up = function (knex, Promise) {
  return knex.schema.createTable('shows', (table) => {
    table.increments()
    table.string('name').notNullable().unique()
    table.string('channel').notNullable()
    table.string('genre').notNullable()
    table.boolean('in_production').notNullable()
  })
  .createTable('favorites', (table) => {
    table.increments()
    table.timestamp('data_added').notNullable().default(knex.fn.now())
    table.integer('show_id').unsigned().references('shows.id')
  })
}

exports.down = (knex, Promise) => knex.dropTable('shows').dropTable('favorites')
