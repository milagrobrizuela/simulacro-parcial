const supertest = require('supertest');
const app = require('../index.js');

const api = supertest(app);

const filtro = 'Phil';

describe('players', () => {
    test('of getPlayersByTextFilter are returned as json', async () => {
        await api
            .get(`/api/players?filtro=${filtro}`)
            .expect(200)
            .expect('Content-Type', /application\/json/);
    });

    test('of getPlayersByTextFilter with "Phil" returns 3 players', async () => {
        const response = await api.get(`/api/players?filtro=${filtro}`);

        expect(response.body).toHaveLength(3);
    });

    test('of getPlayersByTextFilter returning only one object by mail', async () => {
        const filtroLocal = 'flacroutzir@youku.com';
        const response = await api.get(`/api/players?filtro=${filtroLocal}`);

        expect(response.body[0].full_name).toBe('Felizio Lacroutz');
        //ACA CAMBIE fullName POR full_name
    });

    test('of getPlayersByTextFilter returning no object', async () => {
        const filtroLocal = 'x3j7';
        const response = await api.get(`/api/players?filtro=${filtroLocal}`);

        expect(response.body).toHaveLength(0);
    });
});
