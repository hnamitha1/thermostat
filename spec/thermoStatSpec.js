'use strict'
describe("Thermostat" ,function(){
	var thermostat;

	beforeEach(function(){
		thermostat = new Thermostat();
	});

	it('returns default temperature', function(){
		expect(thermostat.temperature).toEqual(20);
	});

  it('increase the temperature', function(){
  	thermostat.incrTemp();
  	expect(thermostat.temperature).toEqual(21);
  });

  it('decrease the temperature', function(){
  	thermostat.decrTemp();
  	expect(thermostat.temperature).toEqual(19);
  });

  it('has a minimum temperature of 10', function(){
    thermostat.temperature = 10
    expect(function(){
      thermostat.decrTemp()
    }).toThrowError('lowest temperature is 10!');
  });

 it('has a maximum temperature of 25 when powersave mode is on', function(){
    thermostat.temperature = 25;
    expect(function(){
      thermostat.incrTemp()
    }).toThrowError('Highest temperature is 25 in powersave mode!');
 });
});