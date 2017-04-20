
exports.up = (knex, Promise) => {
  return knex.schema.
  createTable('shows', (table) => {
    table.increments()
    table.string('name').notNullable().unique()
    table.string('channel').notNullable()
    table.string('genre').notNullable()
    table.boolean('inProduction').notNullable()
  })
  .createTable('favorites', (table) => {
    table.increments()
    table.timestamp('dateAdded').notNullable().defaultTo(knex.fn.now())
    table.integer('show_id').unsigned().references('shows.id')
  })
  .createTable('directors', (table) => { 
    table.increments()
    table.string('name').notNullable().unique()
    table.string('gender').notNullable()
    table.integer('birth_year')
    table.string('twitter_handle')
  })
  .createTable('shows_directors', (table) => {
    table.increments()
    table.integer('director_id').unsigned().references('directors.id')
    table.integer('show_id').unsigned().references('shows.id')
  })
}

exports.down = (knex, Promise) => knex.schema
                                  .dropTable('shows_directors')
                                  .dropTable('favorites')
                                  .dropTable('shows')
                                  .dropTable('directors')
