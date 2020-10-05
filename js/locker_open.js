
var URL = "https://edu-iot.iniad.org/api/v1/iccards";

function getUserInfo() {
    var userid = document.getElementById('iniad-id').value;
    var userpw = document.getElementById('iniad-pw').value;
    var user = { id : userid, pw : userpw };
    return user;
}

function displayIccardRegisterResult(result) {
  var registerResult = document.getElementById('register-result');
  registerResult.innerHTML = result.description;
}

function displayIccardDeleteResult(result) {
  var deleteResult = document.getElementById('delete-result');
  deleteResult.innerHTML = result.description;
}

function registerIccard() {
    var user = getUserInfo();
    var uid = document.getElementById('register-iccard-num').value;
    var comment = document.getElementById('register-iccard-comment').value;
    var iccardInfo = { uid : uid, comment : comment };
    callIccardAPI(URL, 'POST', iccardInfo, user.id, user.pw, displayIccardRegisterResult);
}

function deleteIccard() {
  var user = getUserInfo();
  callIccardAPI(URL, 'DELETE', null, user.id, user.pw, displayIccardDeleteResult);
}