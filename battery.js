function stuffsYouWantToDo(battery) {
    alert("Battery is " + (battery.charging ? "" : "not") + " charging. " +
          "Battery level: " + battery.level * 100 + "%");
  }
  function alertMessage(battery){

        if(battery.level*100 < 90 && !battery.charging){
            //alert('connect charger please');
            var audio = new Audio('alert.mp3');
             audio.play();
        }else if(battery.charging){
            var audio=null;
        }
    
  }
  
  navigator.getBattery().then(function(battery) {
    stuffsYouWantToDo(battery);
    battery.addEventListener('chargingchange', function(){
      stuffsYouWantToDo(battery);
    });
    battery.addEventListener('levelchange', function(){
      alertMessage(battery);
    });
  });