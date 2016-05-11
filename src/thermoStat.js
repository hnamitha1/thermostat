function Thermostat(){
	this.temperature = 20;
  this.powerSave = true;
};

Thermostat.prototype.incrTemp = function() {
  if (!this.powerSave && this.temperature ==32){
      throw new Error('Highest temperature is 32 in powersave mode off!');
  } else if (this.powerSave && this.temperature == 25){
      throw new Error('Highest temperature is 25 in powersave mode!');
  } else {
	    this.temperature++;
  }
};

Thermostat.prototype.decrTemp = function() {
  if (this.temperature === 10) {
    throw new Error('lowest temperature is 10!');
  }
	this.temperature--;
};

Thermostat.prototype.powerSaveSwitch = function(){
  this.powerSave = !this.powerSave;
};

Thermostat.prototype.resetTemp = function(){
  this.temperature = 20;
}

Thermostat.prototype.energyUsage = function(){
  if (this.temperature < 18) {
    return 'green';
  } else if (this.temperature > 25) {
    return 'red';
  } else {
    return 'yellow';
  }
}