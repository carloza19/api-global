import request from 'supertest'
import app from '../src/index'

const api = request(app)


describe('GET', () => {
    it('should respond with JSON format', async () => {
        const response = await api.get('/v1/products');
        expect(response.status).toBe(200);
        expect(response.header['content-type']).toEqual(expect.stringContaining('application/json'));
    });
});

