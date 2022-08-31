const express = require('express');
const request = require('supertest');
const expect = require('chai').expect;

const app = express();

app.get('/first', async function(err, res) {
    res.status(200).json({ "ok": "response" });
});

describe('First Test', async function() {
    it('OK Response', async function() {
        request(app).get('/first').end((err, res) => {
            expect(res.statusCode(200)).to.be.equal(200);
        });
    });
});