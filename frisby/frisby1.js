import {get } from 'frisby';

it('should return a status of 200', function() {
    return get('http://api.example.com')
        .expect('status', 200);
});