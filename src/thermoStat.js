function Thermostat(){
	this.temperature = 20;
  this.powerSave = true;
};

Thermostat.prototype.incrTemp = function() {
  if (this.powerSave && this.temperature == 25) {
    throw new Error('Highest temperature is 25 in powersave mode!');
  }
	this.temperature++;
};

Thermostat.prototype.decrTemp = function() {
  if (this.temperature === 10) {
    throw new Error('lowest temperature is 10!');
  }
	this.temperature--;
};