$(document).ready(function() {

  thermostat = new Thermostat
  updateTemperature();

  $('#temperature-up').click(function(){
    thermostat.increaseTemp();
    updateTemperature();
  });

  $('#temperature-down').click(function(){
    thermostat.decreaseTemp();
    updateTemperature();
  });

  $('#temperature-reset').click(function(){
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function(){
    thermostat.switchPowerSavingModeOn();
    $('#psave').text("ON");
  });

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSavingModeOff();
    $('#psave').text("OFF");
  });

  function updateTemperature(){
    $('#temp').text(thermostat.getTemperature());
    $('#temp').attr('class', thermostat.energyUsage());
  }
});
