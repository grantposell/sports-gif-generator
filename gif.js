//creating sports array starting 
var sports = ["Baseball" , "Softball" , "Curling"];

function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    $("#sports-btn").empty();

    // Looping through the array of sports.
    for (var i = 0; i < sports.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array.
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class
      a.addClass("sports");
      // Adding a data-attribute with a value of the movie at index i
      a.attr("data-name", sports[i]);
      // Providing the button's text with a value of the movie at index i
      a.text(sports[i]);
        
      // chain jQuery Methods
     // var a = $("<button>").addClass("movie").attr("data-name", movies[i]).text(movies[i]);
      // Adding the button to the HTML
      $("#sports-btn").append(a);
    }
  }
  // This function handles events where one button is clicked
  $("#add-sports").on("click", function(event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var sport = $("#sports-input").val().trim();
    // The movie from the textbox is then added to our array
    sports.push(sport);

    // calling renderButtons which handles the processing of our movie array
    renderButtons();
  });

  // Calling the renderButtons function at least once to display the initial list of movies
  renderButtons();
