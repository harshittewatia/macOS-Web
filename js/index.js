function showDateTime() {
    var myDiv = document.getElementById("myDiv");

    var date = new Date();
    var dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    var dayName = dayList[date.getDay()];
    var monthName = monthNames[date.getMonth()];
    var today = `${dayName} ${monthName} ${date.getDate()}`;

    var hour = date.getHours();
    var min = date.getMinutes();

    var time = hour + ":" + min;
    myDiv.innerText = `${today} ${time}`;
}
setInterval(showDateTime, 1000);