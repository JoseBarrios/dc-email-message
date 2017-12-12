'use strict'

var assert = require('assert');
var EmailMessageDataController = require('../index.js');

var model = {};
model.sender = {};
model.givenName = 'Jose';
model.familyName = 'Barrios';
model.email = 'email@email.com';

model.recipient = {};
model.givenName = 'Jane';
model.familyName = 'Smith';
model.email = 'jane@smith.com';


model.about = 'Test Email';
model.text = '<h1 style="color:red"> HTML Email </h1>';
model.description = 'Text Email';
model.dateSent = Date.now();

let email = new EmailMessageDataController(model);

describe('EmailMessageDataController\n', function() {
  describe('Static Methods:', function() {
    describe('EmailMessageDataController.isNumber()', function() {
      it('should ...', function() {
        assert.equal(EmailMessageDataController.isNumber(1), true);
        assert.equal(EmailMessageDataController.isNumber(''), false);
      });
    });
  });

  describe('Properties:', function() {
    describe('sender', function() {
			it('should be person', function() {
        assert.deepEqual(email.sender, model.sender);
      });
    });
    describe('recipient', function() {
			it('should be person', function() {
        assert.deepEqual(email.recipient, model.recipient);
      });
    });
    describe('about', function() {
			it('should be text', function() {
        assert.equal(email.about, model.about);
      });
    });
    describe('text', function() {
			it('should be HTML text', function() {
        assert.equal(email.text, model.text);
      });
    });
    describe('description', function() {
			it('should be text', function() {
        assert.equal(email.description, model.description);
      });
    });

    //describe('dateSent', function() {
			//it('should be date', function() {
        //assert.equal(email.sender, false);
      //});
    //});
  });
});
