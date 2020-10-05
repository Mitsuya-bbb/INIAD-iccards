
var BASE_URL = "https://edu-iot.iniad.org/api/v1";

function getUserInfo() {
  var userid = document.getElementById('iniad-id').value;
  var userpw = document.getElementById('iniad-pw').value;
  var user = { id : userid, pw : userpw };
  return user;
}

function displayLockerPosition(result) {
  var lockerResult = document.getElementById('locker-result');
  var lockerAddress = document.getElementById('locker-address');
  var lockerFloor = document.getElementById('locker-floor');

  lockerResult.innerHTML = result.description;
  if(result.status == 'fail') {
    lockerAddress.innerHTML = 'none';
    lockerFloor.innerHTML = 'none';
  } else {
    lockerAddress.innerHTML = result.lockerAddress;
    lockerFloor.innerHTML = result.lockerFloor;
  }
}

function displayIccardInformation(result) {
  var iccardResult = document.getElementById('iccard-result');
  var iccardID = document.getElementById('iccard-id');
  var iccardComment = document.getElementById('iccard-comment');

  iccardResult.innerHTML = result.description;
  if(result.status == 'fail') {
    iccardID.innerHTML = 'none';
    iccardComment.innerHTML = 'none';
} else {
    iccardID.innerHTML = result.iccardID;
    iccardComment.innerHTML = result.iccardComment;
  }
}

function getLockerPosition() {
  var user = getUserInfo();
  var url = `${BASE_URL}/locker`;
  callLockerPositionAPI(url, 'GET', user.id, user.pw, displayLockerPosition);
}

function getRegisteredIccard() {
  var user = getUserInfo();
  var url = `${BASE_URL}/iccards`;
  callRegisteredIccardAPI(url, 'GET', user.id, user.pw, displayIccardInformation);
}
