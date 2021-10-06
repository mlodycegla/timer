var sec = 0;
var min = 0;
var hour = 0;

var executed = false;

$('#start').click(function (e) { 

if(executed == false) {
  timer = setInterval((timer) => {
    
    executed = true;
      $('#sec').empty();
      sec++
      if(sec<10) {
        $('#sec').empty();
        $('#sec').append("0" + sec);
      } else {
        $('#sec').empty();
        $('#sec').append(sec)
      }
    }, 1000);
}

});
$('#stop').click(function (e) {
  clearInterval(timer);
  console.log("godziny: " + hour + ", minuty: " + min + ", sekundy: " + sec);
  alert("godziny: " + hour + ", minuty: " + min + ", sekundy: " + sec);
  executed = false;
});


$('#reset').click(function (e) {
  clearInterval(timer);
  $('#sec').empty();
  $('#sec').append("0");
  $('#min').empty();
  $('#hour').empty();
  sec = 0;
  min = 0;
  hour = 0;
  executed = false;
});

setInterval((timer) => {
  if(sec % 60 == 0 && sec != 0) {
    min++
    $('#sec').empty();
    $('#sec').append("00")
    sec = 0;

    if(min<10) {
      $('#min').empty();
      $('#min').append("0" + min + ":");
    } else {
      $('#min').empty();
      $('#min').append(min + ":")
    }
  }

  if(min % 60 == 0 && min != 0) {
    hour++
    $('#min').empty();
    $('#min').append("00:")
    min = 0;


  if(hour<10) {
    $('#hour').empty();
    $('#hour').append("0" + hour + ":");
  } else {
    $('#hour').empty();
    $('#hour').append(hour + ":")
  }
}
}, 1000);
