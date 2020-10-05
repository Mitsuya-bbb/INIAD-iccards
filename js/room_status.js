var BASE_URL = "https://edu-iot.iniad.org/api/v1";

function displayRoomStatus(result) {
  var monitoringResult = document.getElementById('monitoring-result');
  var roomTemperature = document.getElementById('room-temperature');
  var roomHumidity = document.getElementById('room-humidity');
  var roomAirpressure = document.getElementById('room-airpressure');
  var roomIlluminance = document.getElementById('room-illuminance');

  monitoringResult.innerHTML = result.description;
  if (result.status == 'fail'){
    roomTemperature.innerHTML = "none";
    roomHumidity.innerHTML = "none";
    roomAirpressure.innerHTML = "none";
    roomIlluminance.innerHTML = "none";
  } else {
    roomTemperature.innerHTML = result.temperature;
    roomHumidity.innerHTML = result.humidity;
    roomAirpressure.innerHTML = result.airpressure;
    roomIlluminance.innerHTML = result.illuminance;
  }
}

function getRoomStatus() {
  var userid = document.getElementById('iniad-id').value;
  var userpw = document.getElementById('iniad-pw').value;
  var roomNum = document.getElementById('room-number').value;
  console.log(userid);
  console.log(userpw);
  console.log(roomNum);
  var url = `${BASE_URL}/sensors/${roomNum}`;
  console.log(url);
  callRoomStatusAPI(url, 'GET', userid, userpw, displayRoomStatus);
}
