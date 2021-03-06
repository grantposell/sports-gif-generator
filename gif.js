//creating sports array starting 
var sports = ["Baseball", "Softball", "Curling"];
renderButtons();
//creating an on click event
$("#add-sports").on("click", function (event) {
  // This event keeps the form from trying to submit itself.
  event.preventDefault();

  // This line will grab the text from the input box
  var sport = $("#sports-input").val().trim();
  // The sport input from the textbox is then added to our array
  sports.push(sport);


  // calling renderButtons which handles the processing of our sports array
  renderButtons();

});
$(document).on("click", ".sports",function (event){
  // console.log($(this))
  var sport = $(this).attr("data-name");
  displaySport(sport);
});

function displaySport(sport) {
  
  console.log(sport)
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sport + "&limit=10&api_key=uinmGi53p3SpdSlN664gKCO1L2Id2Tr2";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
console.log(response)
    // Saving the image_original_url property
   for (var i = 0 ; i < response.data.length; i++){
    var imageUrl = response.data[i].images.fixed_width.url;

    // Creating and storing an image tag
    var sportsImage = $("<img>");

    sportsImage.attr("src", imageUrl);
    sportsImage.attr("alt", "sports image");


    $("#sports-view").prepend(sportsImage);
   }
  });
};







//creating function to render the buttons
function renderButtons() {


  $("#sports-btn").empty();

  // Looping through the array of sports.
  for (var i = 0; i < sports.length; i++) {

    var a = $("<button>");
    // Adding a class
    a.addClass("sports");
    // Adding a data-attribute with a value of the sport at index i
    a.attr("data-name", sports[i]);

    a.text(sports[i]);

    // Adding the button to the HTML
    $("#sports-btn").append(a);

  };
};






