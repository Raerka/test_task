const compareVersion = require('../modules/comparator');
const assert = require('chai').assert;

describe('Comparator', function () {
  
  it('compareVersion() should return 1', function () {
    assert.equal(compareVersion('2.1', '2.0'), 1);
  });
  
  it('compareVersion() should return -1', function () {
    assert.equal(compareVersion('1', '2'), -1);
  });
  
  it('compareVersion() should return -1', function () {
    assert.equal(compareVersion('dd2.1', '2.0'), -1);
  });
  
  it('compareVersion() should return 1', function () {
    assert.equal(compareVersion('1', 'de2'), 1);
  });
  
  it('compareVersion() should return 0', function () {
    assert.equal(compareVersion('1.0', '1.0.0'), 0);
  });
  
  it('compareVersion() should return type number', function () {
    assert.typeOf(compareVersion('1', '2.2'), 'number');
  });
});
