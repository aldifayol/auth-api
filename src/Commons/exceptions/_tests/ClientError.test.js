/* eslint-disable no-undef */
const ClientError = require('../ClientError');

describe('ClientError', () => {
  it('Should throw error when directly use it', () => {
    expect(() => new ClientError('')).toThrowError('cannot instantiate abstract class');
  });
});
