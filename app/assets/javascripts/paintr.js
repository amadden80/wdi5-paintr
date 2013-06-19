//Called when the Add Color button is pressed, creates a new swatch of color in our pallette, with the inputted colo
function add_color(){
  var color_choice = $('#color-input').val();
  var new_swatch = $('<div>');
  new_swatch.addClass('swatch');
  new_swatch.css('background-color', color_choice);
  $('#pallette').append(new_swatch);
  $('#color-input').val('');
}

// Called when a swatch of color is clicked, changes the selected color to that color
function select_color(){

}

//Called when the user hovers over the canvas, changes the color of hovered paint dots to the selected color
function draw(){

}

//Called when document loads, fills the canvas with .paintdot div elements
function populate_canvas(){
  for (var i = 0; i<1200; i++){
    var dot = $('<div>');
    dot.addClass('paint-dot');
    $('#canvas').append(dot);
  }
}

// Called when the clear button is clicked, remove all of the swatches in the pallete and clears the selected color
function clear_pallette(){

}





//Alternate (pretty) way to run code after DOM load
$(function(){
  populate_canvas();
  $('#add-color').click(add_color);
  // Clear event
  // Canvas hover event
  // Swatch click event
});












