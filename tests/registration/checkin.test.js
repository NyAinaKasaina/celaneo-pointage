const request       = require('supertest')
const express       = require('express')
const bodyParser    = require('body-parser')
const registration  = require('../../src/controllers/registration.controller')

let app

beforeAll(() => {
    app = express()
    app.use(bodyParser.json())
    app.post('/checkin', registration.checkin)
})

afterAll((done) => {
    // ARRET DU SERVEUR APRES LES TESTS
    done()
})

describe('POST /checkin', () => {
    it('should respond with a 200 status code', async () => {
        const response = await request(app)
        .post('/checkin')
        .send({
            employeeId: 'E0001',
            comment: 'Comments',
        })

        expect(response.status).toBe(200)
    })

})
