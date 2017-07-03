'use strict'

var assert = require('assert');
var EmailMessage = require('../index.js');

var model = {};
let emailMessage = new EmailMessage(model);

describe('EmailMessage\n', function() {
  describe('Static Methods:', function() {
    describe('EmailMessage.isNumber()', function() {
      it('should ...', function() {
        assert.equal(EmailMessage.isNumber(1), true);
        assert.equal(EmailMessage.isNumber(''), false);
      });
    });
  });
});
