/* eslint-disable no-undef */
const InvariantError = require('../InvariantError');

module.exports = InvariantError;

describe('Invariant Error', () => {
  it('should create an error correctly', () => {
    const invariantError = new InvariantError('an error occurs');

    expect(invariantError.statusCode).toEqual(400);
    expect(invariantError.message).toEqual('an error occurs');
    expect(invariantError.name).toEqual('InvariantError');
  });
});
