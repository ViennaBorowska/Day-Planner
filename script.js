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

    //SAVE
    function  saveNotesLocal() {
        localStorage.setItem("workHours", JSON.stringify(workHours));
    }

    //SET
    function displayNotes() {
        workHours.forEach(function (_thisHour) {
            $(_thisHour.id).val(_thisHour.savedNotes);
        })
    }

    //GET
    function getLocal() {
        var localNotes = JSON.parse(localStorage.getItem("workHours"));

        if (localNotes) {
            workHours = localNotes;
        }

        saveNotesLocal();
        displayNotes();
    
    }
    getLocal();

    //SAVE BUTTON CLICK EVENT

    $(".saveBtn").on("click", function(event){
        event.preventDefault();

        var saveInput = $(this).siblings(".description").children(".future").attr("id");
        workHours[saveInput].savedNotes = $(this).siblings(".decription").children(".future").val();
        console.log(saveInput);

        saveNotesLocal();
        displayNotes();
    })




    
