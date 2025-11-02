const chai = require('chai');
const expect = chai.expect; // This will define the 'expect' function
const request = require('supertest');
const app = require('../app');  // Import the app instance
const { createGuestToken } = require('../utils/jwt');

describe('POST /api/mpesa/stkpush', function() {
  it('should return 200 and process the STK Push if JWT is valid', async function() {
    const token = createGuestToken();

    const response = await request(app)  // Use the app instance directly here
      .post('/api/mpesa/stkpush')
      .set('Authorization', `Bearer ${token}`)
      .send({ phone: '254797759858', amount: 100 });

    expect(response.status).to.equal(200);
    expect(response.body.success).to.equal(true);
  });

  it('should return 401 if JWT is missing or invalid', async function() {
    const response = await request(app)  // Use the app instance directly here
      .post('/api/mpesa/stkpush')
      .send({ phone: '254797759858', amount: 100 });

    expect(response.status).to.equal(401);
    expect(response.body.message).to.equal('Missing or invalid token');
  });

  it('should return 429 if rate limit exceeded', async function() {
    const token = createGuestToken();

    for (let i = 0; i < 6; i++) {
      const response = await request(app)  // Use the app instance directly here
        .post('/api/mpesa/stkpush')
        .set('Authorization', `Bearer ${token}`)
        .send({ phone: '254797759858', amount: 1 });

      if (i < 5) {
        expect(response.status).to.equal(200);
      } else {
        expect(response.status).to.equal(429);
        expect(response.body.message).to.equal('Too many STK push requests. Please try again later.');
      }
    }
  });
});
