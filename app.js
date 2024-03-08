// Original guest list
var guestList = ["noman rajput", "shahrukh arain", "adil arain"];
// Display the original guest list
console.log("Original guest list:");
for (var i = 0; i < guestList.length; i++) {
    console.log(guestList[i]);
}
// One guest cannot make it, so replacing them with a new guest
var unableToAttend = "shahrukh arain";
var newGuest = "hadi arain";
// Finding the index of the guest who cannot attend
var indexOfUnableToAttend = guestList.indexOf(unableToAttend);
// Replacing the guest with the new guest
if (indexOfUnableToAttend !== -1) {
    guestList.splice(indexOfUnableToAttend, 1, newGuest);
}
else {
    console.log(unableToAttend + " is not in the guest list.");
}
// Display the updated guest list with the new invitation
console.log("\nUpdated guest list with new invitation:");
for (var i = 0; i < guestList.length; i++) {
    console.log(guestList[i]);
}
