//Display current time and date in header and keep time with SetInterval 
function displayTopTime() {
    var rightNow = moment().format('dddd MMMM DD YYYY [at] hh:mm:ss a');
    $('#currentDay').text(rightNow);
  }

setInterval(displayTopTime, 1000);
displayTopTime();

//Create timeblocks for planner
var workHours = [
    {
        id: "0",
        time: "09",
        hour: "09",
        ampm: "am",
        savedNotes: ""
        
    },

    {
        id: "1",
        time: "10",
        hour: "10",
        ampm: "am",
        savedNotes: ""
        
    },

    {
        id: "2",
        time: "11",
        hour: "11",
        ampm: "am",
        savedNotes: ""
        
    },

    {
        id: "3",
        time: "12",
        hour: "12",
        ampm: "pm",
        savedNotes: ""
        
    },

    {
        id: "4",
        time: "13",
        hour: "01",
        ampm: "pm",
        savedNotes: ""
        
    },

    {
        id: "5",
        time: "14",
        hour: "02",
        ampm: "pm",
        savedNotes: ""
        
    },

    {
        id: "6",
        time: "15",
        hour: "03",
        ampm: "pm",
        savedNotes: ""
        
    },

    {
        id: "7",
        time: "16",
        hour: "04",
        ampm: "pm",
        savedNotes: ""
        
    },

    {
        id: "8",
        time: "17",
        hour: "05",
        ampm: "pm",
        savedNotes: ""
        
    },
]

//Display timeblocks

workHours.forEach(function(eachHour) {
    var hourBlock = $("<form>").attr({"class" : "row"});
        $(".container").append(hourBlock);

    var blockSpace = $("<div>").text(eachHour.hour + eachHour.ampm).attr({"class" : "col-md-2 hour"});

    hourBlock.append(blockSpace);

    var hourNotes = $("<div>").attr({"class" : "col-md-9 description p-0"});

    var hourData = $("<textarea>");
        hourNotes.append(hourData);
        hourData.attr("id", eachHour.id)
});
    
