var gd = require('../lib/generateDay.js');
var chai         = require('chai');
var expect       = chai.expect;
/* jshint camelcase: false */
describe('generateDay', function () {
  describe('generateDay', function () {
    it('should correct for 1 day', function () {
       expect(gd.generateDay(1)).to.eql('день');
    });
    it('should correct for 3 days', function () {
       expect(gd.generateDay(3)).to.eql('дня');
    });
    it('should correct for 14 days', function () {
       expect(gd.generateDay(14)).to.eql('дней');
    });
    it('should correct for 24 days', function () {
       expect(gd.generateDay(24)).to.eql('дня');
    });
    it('should throws exception if second parameter is null', function () {
       expect(gd.generateDay.bind(null)).to.throw(Error);
    });
    it('should throws exception if first parameter is undefined',
    function () {
       expect(gd.generateDay.bind(undefined)).to.throw(Error);
    });
  });
});
