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
    '09AM',
    '10AM',
    '11AM',
    '12PM',
    '1PM',
    '2PM',
    '3PM',
    '4PM',
    '5PM',
]; 


for (var i = 0; i < times.length; i++) {
    var timeBlocks = $('<input>');
    var timeLabel = $('<label>');
    timeLabel.text(times[i]);
    timeBlocks.addClass('time-block'); 
    timeBox.append(timeBlocks);
}

