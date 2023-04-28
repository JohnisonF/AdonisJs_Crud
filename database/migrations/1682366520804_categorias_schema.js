'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriasSchema extends Schema {
  up () {
    this.create('categorias', (table) => {
      table.increments()
      table.string('nome_categoria', 80).notNullable()
    })
  }

  down () {
    this.drop('categorias')
  }
}

module.exports = CategoriasSchema
