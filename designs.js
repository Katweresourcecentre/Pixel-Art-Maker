// Select color input
// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWeight').val();
  makeGrid(height, width);
})
// fUNCTION
function makeGrid(x, y) {
$('tr').remove();

// Your code goes here!
  for(var row = 1; row <= x; row++){
    $('#pixelCanvas').append('<tr id=table' + row + '></tr>');
    for(var col = 1; col <= y; col++){
      $('#table'+ row).append('<td></td>');
    }
  }
  // Add Color TO CELL
     $('td').click(function addColor(){
      color = $('#colorPicker').val();

         if($(this).attr('style')){
             $(this).removeAttr('style')
            } else{
             $(this).attr('style', 'background-color:' + color+ ';');
           }
  })
}
