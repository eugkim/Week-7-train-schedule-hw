
// 1. Initialize Firebase
var config = {
  apiKey: "AIzaSyA_QypGPkcjPtylRDscf7-HQl8ribnFeIs",
  authDomain: "time-sheet-55009.firebaseapp.com",
  databaseURL: "https://time-sheet-55009.firebaseio.com",
  storageBucket: "time-sheet-55009.appspot.com"
};
firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding train
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();
  
  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var destin = $("#dest-input").val().trim();
  var trainStart = moment($("#start-input").val().trim(), "DD/MM/YY").format("X");
  var freq = $("#rate-input").val().trim();

  // Creates object holding train data
  var newTrain = {
    name: trainName,
    destination: destin,
    start: trainStart,
    rate: freq
  };
  // Uploads train data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(trainName.name);
  console.log(destin.role);
  console.log(trainStart.start);
  console.log(freq.rate);

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#dest-input").val("");
  $("#start-input").val("");
  $("#freq-input").val("");
});
// 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val();
  var dest = childSnapshot.val();
  var trainStart = childSnapshot.val().start;
  var freq = childSnapshot.val().freq;

  // train Info
  console.log(trainName);
  console.log(destin);
  console.log(trainStart);
  console.log(freq);

  // Calculate next arrival


  // Calculate minutes away
;
  // Add each train's data into the table
  $("#schedule-table > tbody").append("<tr><td>" + trainName + "</td><td>" +
});
