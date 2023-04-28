'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarrosSchema extends Schema {
  up () {
    this.create('carros', (table) => {
      table.increments()
      table.string('nome', 80).notNullable().unique()
      table.integer('ano').notNullable()
      table.integer('marca_id').unsigned().references('id').inTable('marcas')
      table.integer('categorias_id').unsigned().references('id').inTable('categorias')
      table.timestamps()
    })
  }

  down () {
    this.drop('carros')
  }
}

module.exports = CarrosSchema
