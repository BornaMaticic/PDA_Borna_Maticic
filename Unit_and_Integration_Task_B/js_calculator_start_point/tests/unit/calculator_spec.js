var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should be able to add numbers', function() {
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(6);
    calculator.operatorClick('=');
    actual = calculator.runningTotal;
    assert.equal(actual, 8);
  });

  it('it should be able to subtract numbers', function() {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    actual = calculator.runningTotal;
    assert.equal(actual, 5)
  });

  it('it should be able to muliply numbers', function () {
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(6);
    calculator.operatorClick('=');
    actual = calculator.runningTotal;
    assert.equal(actual, 18);
  });

  it('it should be able to divide numbers', function () {
    calculator.numberClick(24);
    calculator.operatorClick('/');
    calculator.numberClick(8);
    calculator.operatorClick('=');
    actual = calculator.runningTotal;
    assert.equal(actual, 3);
  });

   it('it should concatenate multiple number button clicks', function () {
    calculator.numberClick(2);
    calculator.numberClick(2);
    actual = calculator.runningTotal;
    assert.equal(actual, 22);
   });

   it('it should chain multiple operations together', function () {
    calculator.numberClick(1);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    actual = calculator.runningTotal;
    assert.equal(actual, 3);
   });

   it('it should clear the running total without affecting the calculation', function () {
    calculator.numberClick(1);
    calculator.clearClick();
    calculator.numberClick(1);
    actual = calculator.runningTotal;
    assert.equal(actual, 1);
   });



});
