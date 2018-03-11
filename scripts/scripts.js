function quotes() {
  var quotes = [
    "Life is just a ride.",
    "Listen. Smile. Agree. And do whatever the hell you were going to do anyway.",
    "Be happy. Don't worry, be happy now",
    "Skate or die.",
    "We are all elements of the universe experiencing itself and learning about itself.",
    "Empty your mind, be formless, shapeless — like water. Now you put water in a cup, it becomes the cup; You put water into a bottle it becomes the bottle; You put it in a teapot it becomes the teapot. Now water can flow or it can crash. Be water, my friend."
  ];

  var randomNumber = Math.random() * quotes.length;
  randomNumber = Math.floor(randomNumber);

  document.getElementById("quoteGen").innerHTML = quotes[randomNumber];
}
