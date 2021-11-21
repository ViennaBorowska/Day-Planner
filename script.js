//DISPLAY CURRENT TIME AND DATE IN HEADER
function displayTopTime() {
    var rightNow = moment().format('dddd MMMM DD YYYY [at] hh:mm:ss a');
    $('#currentDay').text(rightNow);
  }

setInterval(displayTopTime, 1000);
displayTopTime();

//CREATE TIMEBLOCKS
var workHours = [
    {
        id: "0",
        time: "09",
        hour: "9",
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
        hour: "1",
        ampm: "pm",
        savedNotes: ""
        
    },

    {
        id: "5",
        time: "14",
        hour: "2",
        ampm: "pm",
        savedNotes: ""
        
    },

    {
        id: "6",
        time: "15",
        hour: "3",
        ampm: "pm",
        savedNotes: ""
        
    },

    {
        id: "7",
        time: "16",
        hour: "4",
        ampm: "pm",
        savedNotes: ""
        
    },

    {
        id: "8",
        time: "17",
        hour: "5",
        ampm: "pm",
        savedNotes: ""
        
    },
]

//DISPLAY TIMEBLOCKS

workHours.forEach(function(eachHour) {
    var hourBlock = $("<form>").attr({"class" : "row"});
        $(".container").append(hourBlock);

    var blockSpace = $("<div>").text(eachHour.hour + eachHour.ampm).attr({"class" : "col-md-2 hour"});

    var hourNotes = $("<div>").attr({"class" : "col-md-9 description p-0"});

    var hourData = $("<textarea>");
        hourNotes.append(hourData);
        hourData.attr("id", eachHour.id);

        // TIMEBLOCK COLOUR CODING

        if (eachHour.time < moment().format("HH")) {
            hourData.attr({"class" : "past",})

        }   else if (eachHour.time === moment().format("HH")) {
            hourData.attr({"class" : "present",})

        }   else if (eachHour.time > moment().format("HH")) {
            hourData.attr({"class" : "future"})
        }

        //SAVE BUTTON

        var saveNotes = $("<i>").attr({"class" : "saveBtn"}).text("SAVE");
        var saveBtn = $("<button>").attr({"class" : "saveBtn"});

        hourBlock.append(blockSpace, hourNotes, saveBtn);
        saveBtn.append(saveNotes);
})
// LOCAL STORAGE SAVING, SETTING & GETTING

    //SET
    function  saveNotesLocal() {
        workHours.forEach(function(workHour) {
            localStorage.setItem(workHour, JSON.stringify(workHours[i].savedNotes))
        }
        )};
    
        //DISPLAY STORED DATA
    function displayNotes() {
        workHours.forEach(function (thisHour) {
            $(thisHour.id).val(thisHour.savedNotes);
        })
    }
    //GET
    function getLocal() {
        for (i = 0; i > workHours.length; i++);
        var localNotes = JSON.parse(localStorage.getItem("workHours[i]"));

        if (localNotes) {
            workHours.savedNotes = localNotes;
        }

        saveNotesLocal();
        displayNotes();
    
    }
    getLocal();

    //SAVE BUTTON CLICK EVENT

    $(".saveBtn").on("click", function(event){
        event.preventDefault();

        var saveInput = $(this).prev(".description").children("textarea").val();
        workHours[saveInput].savedNotes = $(this).prev(".decription").children("textarea").val();
        console.log(saveInput);

        saveNotesLocal();
        displayNotes();
    })




    
