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

 describe("#powerSaveSwitch", function(){
    it("turns off power save mode when it is on", function(){
      thermostat.powerSaveSwitch();
      expect(thermostat.powerSave).toEqual(false);
    });
    it("turns on power save mode when it is off", function(){
      thermostat.powerSave = false;
      thermostat.powerSaveSwitch();
      expect(thermostat.powerSave).toEqual(true);
    });
 });
 
 it('has a maximum temperature of 32 when powersave mode is off', function(){
    thermostat.temperature = 32;
    thermostat.powerSaveSwitch();
    expect(function(){
      thermostat.incrTemp()
    }).toThrowError('Highest temperature is 32 in powersave mode off!');
 });


});