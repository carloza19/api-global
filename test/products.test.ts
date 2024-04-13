import request from 'supertest'
import app from '../src/index'

const api = request(app)

test('los productos se deben retornar en formato JSON', () => {
    api.get('/api/products').expect(200).expect('Content-Type', '/application\/json')
})

