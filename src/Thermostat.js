function Thermostat(){
  this._temperature = 20
  TEMP_CHANGE = 1
  MIN_TEMP = 10
}

Thermostat.prototype.getTemperature = function() {
  return this._temperature;
};

Thermostat.prototype.increaseTemp = function() {
  return this._temperature += TEMP_CHANGE;
};

Thermostat.prototype.decreaseTemp = function() {
  if(this._temperature === MIN_TEMP){
    throw Error('minimum temperature of 10 degrees reached');
  }
  return this._temperature -= TEMP_CHANGE;
};