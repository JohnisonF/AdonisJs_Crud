'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Database = use('Database')

Route.on('/').render('welcome')

Route.get('/carros', async () => {
    return Database
        .from('carros')
        .select('carros.nome','carros.ano', 'categorias.nome_categoria as categoria', 'marcas.nome_marca as marca', 'categorias.id', 'marcas.id')
        .join('categorias', 'carros.categorias_id', '=', 'categorias.id')
        .join('marcas', 'carros.marca_id', '=', 'marcas.id')
})

Route.post('/carros', 'CarrosController.create')

Route.put('/carros/:id', 'CarrosController.update')

Route.delete('/carros/:id', 'CarrosController.delete')