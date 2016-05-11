'use strict'
describe("Thermostat" ,function(){
	var thermostat;

	beforeEach(function(){
		thermostat = new Thermostat();
	});

	it('returns default temperature', function(){
		expect(thermostat.temperature).toEqual(20);
	});

});