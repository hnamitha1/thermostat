$(document).ready(function(){
	var thermostat = new Thermostat ();
	updateTemperature();

	$('#inctem').on('click', function() { 
  	thermostat.incrTemp(); 
 		updateTemperature(); 
	});

	$('#dectem').on('click', function() { 
  	thermostat.decrTemp(); 
 		updateTemperature(); 
	});

	$('#reset').on('click', function() { 
  	thermostat.resetTemp(); 
 		updateTemperature(); 
	});

	$('#posasw').on('click', function() { 
  	thermostat.powerSaveSwitch(); 
  	if(thermostat.powerSave == true){
  		$('#powsave').text('on');
  	}else{
  		$('#powsave').text('off');
  	};
 		updateTemperature(); 
	});

	function updateTemperature() {
	  $('#temperature').text(thermostat.temperature);
	  $('#temperature').attr('class', thermostat.energyUsage());
	};

});
    