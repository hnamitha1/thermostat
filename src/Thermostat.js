function Thermostat(){
  this._temperature = 20
  TEMP_CHANGE = 1
}


Thermostat.prototype.getTemperature = function() {
  return this._temperature;
};

Thermostat.prototype.increaseTemp = function() {
  return this._temperature += TEMP_CHANGE;
};