const axios = require('axios');
const sinon = require('sinon');
const chai = require('chai');
const MpesaTransaction = require('../models/MpesaTransaction');
const { initiateStkPush, handleCallback, getPaymentStatus } = require('../services/mpesaService');

const { expect } = chai;

describe('MPESA Service Functions', function() {
  let axiosPostStub;
  let createStub;
  let findOneStub;
  let updateOneStub;

  beforeEach(() => {
    axiosPostStub = sinon.stub(axios, 'post');
    createStub = sinon.stub(MpesaTransaction, 'create');
    findOneStub = sinon.stub(MpesaTransaction, 'findOne');
    updateOneStub = sinon.stub(MpesaTransaction, 'updateOne');
  });

  afterEach(() => {
    axiosPostStub.restore();
    createStub.restore();
    findOneStub.restore();
    updateOneStub.restore();
  });

  describe('initiateStkPush', function() {
    it('should initiate an STK push and save the transaction', async function() {
      const mockResponse = {
        data: {
          CheckoutRequestID: '12345',
          CustomerMessage: 'Please authorize the payment on your phone.',
        },
      };

      axiosPostStub.resolves(mockResponse);
      createStub.resolves({
        phone: '254797759858',
        amount: 100,
        checkoutRequestID: '12345',
        status: 'pending',
        message: '📲 Waiting for user to authorize the transaction...',
      });

      const result = await initiateStkPush({ phone: '254797759858', amount: 100 });

      expect(result.CheckoutRequestID).to.equal('12345');
      expect(result.CustomerMessage).to.equal('Please authorize the payment on your phone.');
      expect(createStub.calledOnce).to.be.true;
    });

    it('should throw an error if STK push fails', async function() {
      axiosPostStub.rejects(new Error('STK Push failed'));

      try {
        await initiateStkPush({ phone: '254797759858', amount: 100 });
        expect.fail('Expected error to be thrown');
      } catch (err) {
        expect(err.message).to.equal('STK Push failed');
      }
    });
  });

  describe('handleCallback', function() {
    it('should update transaction status and message based on callback', async function() {
      const mockTransaction = {
        checkoutRequestID: '12345',
        status: 'pending',
      };

      findOneStub.resolves(mockTransaction);

      const callbackData = {
        CheckoutRequestID: '12345',
        ResultCode: 0,
        ResultDesc: 'Payment successful',
      };

      updateOneStub.resolves({ nModified: 1 });

      const result = await handleCallback(callbackData);

      expect(result.skipped).to.equal(false);
      expect(updateOneStub.calledOnce).to.be.true;
    });

    it('should skip callback if transaction status is not pending', async function() {
      const mockTransaction = {
        checkoutRequestID: '12345',
        status: 'success',
      };

      findOneStub.resolves(mockTransaction);

      const callbackData = {
        CheckoutRequestID: '12345',
        ResultCode: 0,
        ResultDesc: 'Payment successful',
      };

      const result = await handleCallback(callbackData);

      expect(result.skipped).to.equal(true);
      expect(updateOneStub.called).to.be.false;
    });

    it('should throw an error if transaction not found', async function() {
      findOneStub.resolves(null);

      const callbackData = {
        CheckoutRequestID: '12345',
        ResultCode: 0,
        ResultDesc: 'Payment successful',
      };

      try {
        await handleCallback(callbackData);
        expect.fail('Expected error to be thrown');
      } catch (err) {
        expect(err.message).to.equal('Callback for unknown CheckoutRequestID: 12345');
      }
    });
  });

  describe('getPaymentStatus', function() {
    it('should return the transaction details if found', async function() {
      const mockTransaction = {
        checkoutRequestID: '12345',
        phone: '254797759858',
        amount: 100,
        status: 'success',
      };

      findOneStub.resolves(mockTransaction);

      const result = await getPaymentStatus('12345');

      expect(result.checkoutRequestID).to.equal('12345');
      expect(result.status).to.equal('success');
    });

    it('should throw an error if transaction not found', async function() {
      findOneStub.resolves(null);

      try {
        await getPaymentStatus('12345');
        expect.fail('Expected error to be thrown');
      } catch (err) {
        expect(err.message).to.equal('Transaction not found');
      }
    });
  });
});
