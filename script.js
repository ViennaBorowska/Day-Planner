//Display current time and date in header and keep time with SetInterval 
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    $('#currentDay').text(rightNow);
  }

setInterval(displayTime, 1000);
displayTime();

//Create timeblocks for planner
var timeBox = $('#container');

var times = [
    '09:00AM',
    '10:00AM',
    '11:00AM',
    '12:00PM',
    '13:00PM',
    '14:00PM',
    '15:00PM',
    '16:00PM',
    '17:00PM',
]; 


for (var i = 0; i < times.length; i++) {
    var timeBlocks = $('<input>');
    var timeLabel = $('<label>');
    timeLabel.text(times[i]);
    timeBlocks.addClass('time-block'); 
    timeBox.append(timeBlocks);
}

