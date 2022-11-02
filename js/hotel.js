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
});

function reservation() {
    var guest = {
        name: $('#name').val(),
        numberofGuest: $('#number').val(),
        checkIn: $('#checkin').val(),
        

    };
}