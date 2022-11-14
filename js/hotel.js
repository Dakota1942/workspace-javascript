// for hotel registration
var test = {
    hotelName: "marriot",
    room: 350,
    booked: 120,
    display: function () {
        return this.hotelName;
    }
};
console.log(test.hotelName);
console.log(test.room);
console.log(test.booked);

// event
$(function(){
    $('#submit').click(reservation);
    $('#list').click(displayR);
});

var gGroup = new Array();

function reservation() {
    var guest = {
        name: $('#name').val(),
        numberofGuest: $('#numguests').val(),
        checkIn: $('#checkin').val(),
        checkOut: $('#checkout').val(),
        roomType: $('#room').val(),
    };
    $("p:first").html("Thank you for your reservation.");
    gGroup.push(guest);
    //console.log(gGroup);
}

function displayR() {
    $("form").append("<table>");
    for(var i in gGroup) {
        var theguest = gGroup[i];
        var row = "<tr> <td>" + theguest.name + "</tr> </td>";
        $("table").append(row);
    }
}