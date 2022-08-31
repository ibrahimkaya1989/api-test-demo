const assert = require('chai').assert;

const request = require('supertest')('https://jsonplaceholder.typicode.com');

describe('Users API', function() {

    it('GET /users', async() => {
        // Make a GET request to the users route 
        const res = await request
            .get('/users')
            .expect(200);
        // assert data bieng return to not be empty
        assert.isNotEmpty(res.body);
    });



    it('POST /users', () => {
        const data = {
            name:'Test user',
            email:'test_user@digitalonus.com',
        };
        return request
        .post ('/users')
        .send(data) // send payload data
        .then((res) => {
        assert.hasAnyKeys(res.body, 'id');
        assert.equal(res.body.name, data.name);
        assert.equal(res.body.email, data.email);
    
        });
    });

});