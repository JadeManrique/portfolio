$(document).ready( function () {


/* Project hover effect */
  $(".placeholder img").hover( function(e) {

        $(this).animate({opacity: 1.0, height: "auto", width: "220px"}, 150);

    }, function() {

        $(this).animate({opacity: 0.5, height: "auto", width: "200px"}, 150);

    });
/* end */

});

/* Random Quote Generator */
function quotes() {
  var quotes = [
    "TIP: Practice hotkeys. They are magical.",
    "FACT: I enjoy pineapples and lentils.",
    "TIP: Yerba Mate is a great caffeinated alternative to most other brands.",
    "FACT: I love back-country backpacking and my most recent trip was the Lost Coast in Humboldt County.",
    "\"We are all elements of the universe experiencing itself and learning about itself.\" - Robert Lanza (Biocentrism)",
    "\"Empty your mind, be formless, shapeless — like water. Now you put water in a cup, it becomes the cup; You put water into a bottle it becomes the bottle; You put it in a teapot it becomes the teapot. Now water can flow or it can crash. Be water, my friend.\" - Bruce Lee"
  ];

  var randomNumber = Math.random() * quotes.length;
  randomNumber = Math.floor(randomNumber);

  document.getElementById("quoteGen").innerHTML = quotes[randomNumber];
}
/* end */
