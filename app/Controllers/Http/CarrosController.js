'use strict'

const Carros = use('App/Models/Carros')

class CarrosController {
		async create ({ request, response }) {
			const data = request.only(['nome', 'ano'])
			
			if (request.input('marca_id')) {
				data.marca_id = request.input('marca_id')
			}
			if (request.input('categorias_id')) {
				data.categorias_id = request.input('categorias_id')
			}

			const carro = await Carros.create(data)
			return response.status(201).json(carro)
		}
		

		async update ({ params, request, response }) {
			try {
				const carro = await Carros.findOrFail(params.id)
				const data = request.only(['nome', 'ano'])
				if (request.input('marca_id')) {
					data.marca_id = request.input('marca_id')
				}
				if (request.input('categorias_id')) {
					data.categorias_id = request.input('categorias_id')
				}
				carro.merge(data)
				await carro.save()

				return response.json(carro)
			} catch (error) {

				return response.status(404).json({ message: 'Carro não encontrado.' })
			}
		}

		async delete ({ params, response }) {
			try {
				const carro = await Carros.findOrFail(params.id)
				await carro.delete()
				return response.status(201).json({message: 'Excluido com sucesso!'})
			}
			catch(error) {
				return response.status(404).json({ message: 'Carro não encontrado.' })
			} 
		}
}

module.exports = CarrosController
