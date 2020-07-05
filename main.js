var arr = new Array();
var score = 0;
var hasConflicted = new Array();
$(document).ready(function () {
  prepareForMobile()
  newGame();
});
function prepareForMobile() {
  if(documentWidth>500){
    gridContainerWidth=500
    cellSpace = 20
    cellSideLength = 100
  }
  $('#container').css('width',gridContainerWidth-2*cellSpace)
  $('#container').css('height',gridContainerWidth-2*cellSpace)
  $('#container').css('padding',cellSpace)
  $('#container').css('border-radius',0.02*gridContainerWidth)
  $('.grid-class').css('width',cellSideLength)
  $('.grid-class').css('height',cellSideLength)
  $('.grid-class').css('border-radius',0.02*cellSideLength)

}
function newGame() {
 init();
 randomNumber()
 randomNumber()
}
function init() {
  $(".number-cell").remove()
 for(var i=0;i<4;i++){
   arr[i] = new Array();
   hasConflicted[i]=new Array();
   for(var j=0;j<4;j++){
     arr[i][j] = 0;
     hasConflicted[i][j]=false;
     var gridCell = $("#grid-cell-"+i+"-"+j);
     gridCell.css('top',getPosTop(i,j));
     gridCell.css('left',getPosLeft(i,j));
   }
 }
 updateView()
  score = 0
}
function updateView() {
  $('.number-cell').remove()
  for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
      $('#container').append("<div class='number-cell' id='number-cell-"+i+'-'+j+"'></div>")
      var numberCell = $("#number-cell-"+i+"-"+j)
      if(arr[i][j]==0){
        numberCell.css("width","0px")
        numberCell.css("height","0px")
        numberCell.css("top",getPosTop(i,j)+cellSideLength/2+'px')
        numberCell.css("left",getPosLeft(i,j)+cellSideLength/2+'px')
      }else{
        numberCell.css("width",cellSideLength+'px')
        numberCell.css("height",cellSideLength+'px')
        numberCell.css("top",getPosTop(i,j))
        numberCell.css("left",getPosLeft(i,j))
        numberCell.css("background-color",getNumberBackgroundColor(arr[i][j]))
        numberCell.css("color",getNumberColor(arr[i][j]))
        numberCell.text(arr[i][j])
      }
      hasConflicted[i][j]=false;
    }
  }
  $('.number-cell').css('line-height',cellSideLength+'px')
  $('.number-cell').css('font-size',0.6*cellSideLength+'px')
}
function randomNumber() {
  if(nospace(arr)){
    return false;
  }
  var x = parseInt(Math.floor(Math.random()*4))
  var y = parseInt(Math.floor(Math.random()*4))
  var timer = 0
  while (timer<50){
    if(arr[x][y]==0){
      break;
    }
    var x = parseInt(Math.floor(Math.random()*4))
    var y = parseInt(Math.floor(Math.random()*4))
    timer++
  }
  if(timer==50){
    for(var i=0;i<4;i++){
      for(var j=0;j<4;i++){
        if(arr[i][j]==0) {
          x = i
          y = j
        }
      }
    }
  }
  var randnumber = Math.random()<0.5 ? 2:4
  arr[x][y] = randnumber
  showNumber(x,y,randnumber)
  return true;
}