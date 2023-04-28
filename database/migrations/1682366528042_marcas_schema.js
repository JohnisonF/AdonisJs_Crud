'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MarcasSchema extends Schema {
  up () {
    this.create('marcas', (table) => {
      table.increments()
      table.string('nome_marca', 80).notNullable()
    })
  }

  down () {
    this.drop('marcas')
  }
}

module.exports = MarcasSchema
