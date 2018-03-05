//creating sports array starting 
var sports = ["Baseball" , "Softball" , "Curling"];

//creating function to render the buttons
function renderButtons() {


    $("#sports-btn").empty();

    // Looping through the array of sports.
    for (var i = 0; i < sports.length; i++) {

      var a = $("<button>");
      // Adding a class
      a.addClass("sports");
      // Adding a data-attribute with a value of the movie at index i
      a.attr("data-name", sports[i]);
      
      a.text(sports[i]);
        
      // Adding the button to the HTML
      $("#sports-btn").append(a);
    }
  //creating an on click event
  $("#add-sports").on("click", function(event) {
    // This event keeps the form from trying to submit itself.
    event.preventDefault();

    // This line will grab the text from the input box
    var sport = $("#sports-input").val().trim();
    // The sport input from the textbox is then added to our array
    sports.push(sport);

    $("#sports-view").on("click", function(){
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=uinmGi53p3SpdSlN664gKCO1L2Id2Tr2&tag=sports"
        $.ajax({
            url: queryURL,
            method: "GET"
          })

    
    
    // calling renderButtons which handles the processing of our sports array
    renderButtons();

 

  });

  // Calling the renderButtons function at least once to display the initial list of sports
  renderButtons();



  
