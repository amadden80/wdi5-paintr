//Called when document loads, fills the canvas with .paintdot div elements
function populate_canvas(){
  for (var i = 0; i<1200; i++){
    var dot = $('<div>');
    dot.addClass('paint-dot');
    $('#canvas').append(dot);
  }
}

//Called when the Add Color button is pressed, creates a new swatch of color in our pallette, with the inputted colo
function add_color(){
  var color_choice = $('#color-input').val();
  var new_swatch = $('<div>');
  new_swatch.addClass('swatch');
  new_swatch.css('background-color', color_choice);
  $('#color-pallette').append(new_swatch);
  $('#color-input').val('');
}

// Called when a swatch of color is clicked, changes the selected color to that color
function select_color(){
  var new_selected_color = $(this).css('background-color');
  $('#selected-color').css('background-color', new_selected_color);
}

//Called when the user hovers over the canvas, changes the color of hovered paint dots to the selected color
function draw(){
  var selected_color = $('#selected-color').css('background-color');
  if(selected_color !== ''){
    $(this).css('background-color', selected_color);
  }
}

// Called when the clear color button is clicked, remove all of the swatches in the color pallete and clears the selected color
function clear_pallette(){
  $('#color-pallette').empty();
  $('#selected-color').css('background-color', '');
}

//Called when the Add Image button is pressed, creates a new image "swatch" in our image pallette, with the inputted image as its background
function add_image(){
  var image = $('<div>');
  image.addClass('swatch');
  var url = $('#image-input').val();
  image.css('background-image', 'url('+url+')');
  $('#image-pallette').prepend(image);
  $('#image-input').val('');
}

// Called when an image swatch is clicked, changes the canvas background image to that image
function select_image(){
  var image = $(this).css('background-image');
  $('#canvas').css('background-image', image);
}

// Called when the clear image button is clicked, remove all of the swatches in the image pallete and clears the canvas image
function clear_image(){
  $('#image-pallette').empty();
  $('#canvas').css('background-image', 'none');
}


//jQuery alternative to $(document).ready(function(){}); that is prettier (less verbose)
$(function(){
  //Canvas setup
  populate_canvas();

  //Color events
  $('#add-color').on('click', add_color);
  $('#color-pallette').on('click', '.swatch', select_color);
  $('#canvas').on('mouseover', '.paint-dot', draw);
  $('#clear-color').on('click', clear_pallette);

  //Image events
  $('#add-image').on('click', add_image);
  $('#image-pallette').on('click', '.swatch', select_image);
  $('#clear-image').on('click', clear_image);
});