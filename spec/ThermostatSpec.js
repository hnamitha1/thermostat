'use strict';

describe('Thermostat', function(){
  var thermostat;

beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a starting temperature of 20 degrees', function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('can increase the temerature', function() {
    thermostat.increaseTemp();
    thermostat.increaseTemp();
    expect(thermostat.getTemperature()).toEqual(22);
  });

});

