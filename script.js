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

var timeBlockEl = $('<form>');
timeBox.append(timeBlockEl);

for (var i = 0; i < times.length; i++) {
    var timeBlocks = $('<input>');
    timeBlocks.text(times[i]);
    timeBlocks.addClass('time-block'); 
    timeBox.append(timeBlockEl);
}