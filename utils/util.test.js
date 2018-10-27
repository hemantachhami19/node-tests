//Mocha goes through the project
const utils = require('./utils');
var assert = require('assert');

it('should add two numbers',()=>{
  var res = utils.add(2,33);
  assert.equal(res, 35, 'test passes');
});

it('should square the  number 6',()=>{
   var result = utils.square(6);
   assert.equal(result,36,"Two values are not equal")
});

describe('Basic Mocha String Test', function () {
    it('should return number of charachters in a string', function () {
        assert.equal("Hello".length, 5);
    });
    it('should return first charachter of the string', function () {
        assert.equal("Hello".charAt(0), 'H');
        //throw {myError:'throwing error to fail test'}
    });
});

