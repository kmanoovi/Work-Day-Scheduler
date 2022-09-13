var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDay);

$(".saveBtn").on("click", function() {
    var appointment = description.val();
    var time = attr("id");

    localStorage.setItem(appointment, time);
})

$("#8a .description").val(localStorage.getItem("8a"));
$("#9a .description").val(localStorage.getItem("9a"));
$("#10a .description").val(localStorage.getItem("10a"));
$("#11a .description").val(localStorage.getItem("11a"));
$("#12p .description").val(localStorage.getItem("12p"));
$("#1p .description").val(localStorage.getItem("1p"));
$("#2p .description").val(localStorage.getItem("2p"));
$("#3p .description").val(localStorage.getItem("3p"));
$("#4p .description").val(localStorage.getItem("4p"));
$("#5p .description").val(localStorage.getItem("5p"));
$("#6p .description").val(localStorage.getItem("6p"));

function timeTracker() {
    var currentHour = moment().hour();

    $(".timeblock").each(function() {
        var timeBlockHour = parseInt(attr("id".split("hour")[0]));

        if (timeBlockHour < currentHour) {
            addClass("past");
            removeClass("future");
            removeClass("present");
        }
        else if (timeBlockHour === currentHour) {
            removeClass("past");
            addClass("present");
            removeClass("future");
        }
        else {
            removeClass("past");
            removeClass("present");
            addClass("future");
        }
    })
}

timeTracker();
