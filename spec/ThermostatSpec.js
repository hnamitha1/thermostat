'use strict';

describe('Thermostat', function(){
  var thermostat;
  var i;

beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a starting temperature of 20 degrees', function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('can increase the temerature', function() {
    for (i = 0; i < 6; i++) {
      thermostat.increaseTemp();
    }
    expect(thermostat.getTemperature()).toEqual(26);
  });

  it('can decrease the temerature', function() {
    for (i = 0; i < 5; i++) {
      thermostat.decreaseTemp();
    }
    expect(thermostat.getTemperature()).toEqual(15);
  });

  it('has a minimum temperature of 10 degrees', function(){
    for (i = 0; i < 10; i++) {
      thermostat.decreaseTemp();
    }

    expect(function() {
      thermostat.decreaseTemp();
    }).toThrowError("minimum temperature of 10 degrees reached");
  });

});