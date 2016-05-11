function Thermostat(){
	this.temperature = 20;
};

Thermostat.prototype.incrTemp = function() {
	this.temperature++;
};

Thermostat.prototype.decrTemp = function() {
	this.temperature--;
};