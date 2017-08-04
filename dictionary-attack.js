var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true; 
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false; 
  });
}

window.onload = init;

/* ADD YOUR CODE BELOW */

function checkPassword(){
  var user = document.getElementById("pw").value;
  var = running
  for(var i = 0 ; i < wordList.length ; i++){
    if (user == wordList[i]){
      running = false;
      printResults(running);
    }
  }
  running = true;
  printResults(running);
}  
function printResults(running) {
  if(running == true){
      document.getElementById("result").innerHTML = "good password!";
       break;
    }else;{
      document.getElementById("result").innerHTML = "that's a weak password, try again!";
      location.reload();
      checkPassword();
  }
}  

