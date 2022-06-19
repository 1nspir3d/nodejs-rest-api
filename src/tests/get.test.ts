const request = require('supertest')
const {server} = require('../server')
describe('Test GET method', () => {
  it('should answer with status code 200 and all users records or empty object if there are no users to be returned', async () => {
    const res = await request(server)
      .get('/api/users')

    expect(res.body.payload).toBe(JSON.stringify({}))
		expect(res.body.status).toBe(200)
		expect(res.statusCode).toBe(200)
  })

	it('should answer with status code 400 and corresponding message if userId is invalid (not uuid)', async () => {
		const res = await request(server)
			.get('/api/users/3213123asd=23123-asd-12312')

		expect(res.body.payload).toBe(null)
		expect(res.body.status).toBe(400)
		expect(res.body.message).toBe('Invalid uuid')
		expect(res.statusCode).toBe(400)
	})

	it('should answer with status code 404 and corresponding message if record with id === userId doesn\'t exist', async () => {
		const res = await request(server)
			.get('/api/users/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d')

		expect(res.body.payload).toBe(null)
		expect(res.body.status).toBe(404)
		expect(res.body.message).toBe('User doesn\'t exist')
		expect(res.statusCode).toBe(404)
	})
})
// afterAll(async () => {
// 	server.close()
// })