function Thermostat(){
	this.temperature = 20;
};

Thermostat.prototype.incrTemp = function() {
	this.temperature++;
};