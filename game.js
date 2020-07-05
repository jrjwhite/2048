var startx=0;
var starty=0;
var endx=0;
var endy=0;
$(document).keydown(function (event) {
  switch (event.keyCode){
    case 37://left
      event.preventDefault();
      if(moveLeft()){
        setTimeout(randomNumber(),210);
       setTimeout(isGameover(),310);
      }
      break;
    case 38://up
      event.preventDefault();
      if(moveUp()){
        setTimeout(randomNumber(),210);
        setTimeout(isGameover(),310);
      }
      break;
    case 39://right
      event.preventDefault();
      if(moveRight()){
        setTimeout(randomNumber(),210);
        setTimeout(isGameover(),310);
      }
      break;
    case 40://down
      event.preventDefault();
      if(moveDown()){
        setTimeout(randomNumber(),210);
        setTimeout(isGameover(),310);
      }
      break;
    default:
      break;
  }
});
document.addEventListener('touchstart',function (event) {
  startx = event.touches[0].pageX;
  starty = event.touches[0].pageY;
});
document.addEventListener('touchend',function (event) {
  endx = event.changedTouches[0].pageX;
  endy = event.changedTouches[0].pageY;
  var deltax = endx -startx;
  var deltay = endy - starty;
  if(Math.abs(deltax) < 0.3*documentWidth && Math.abs(deltay) < 0.3*documentWidth){
        return ;
  }
  if(Math.abs(deltax) >= Math.abs(deltay)){
    if(deltax > 0){//move right

      if(moveRight()){
        setTimeout(randomNumber(),210);
        setTimeout(isGameover(),310);
      }
    }else {//move left
      if(moveLeft()){
        setTimeout(randomNumber(),210);
        setTimeout(isGameover(),310);
      }
    }
  }else{
    if(deltay > 0){//move down
      if(moveDown()){
        setTimeout(randomNumber(),210);
        setTimeout(isGameover(),310);
      }
    }else{//move up
      if(moveUp()){
        setTimeout(randomNumber(),210);
        setTimeout(isGameover(),310);
      }
    }
  }
});
function isGameover() {
    if(nospace(arr)&&nomove(arr)){
      newGame();
    }
}
function moveLeft() {
  if(!canMoveLeft(arr)){
    return false;
  }
for(var i=0;i<4;i++){
    for(var j=1;j<4;j++){
      if(arr[i][j]!=0){
        for(var k=0;k<j;k++){
          if(arr[i][k]==0 && noHorizontalCol(i,k,j,arr)){
            showMoveAnimation(i,j,i,k)
            arr[i][k]=arr[i][j]
            arr[i][j]=0
            continue;
          }else if(arr[i][k]==arr[i][j] && noHorizontalCol(i,k,j,arr)&& !hasConflicted[i][k]){
            showMoveAnimation(i,j,i,k)
            hasConflicted[i][k]=true
            arr[i][k]+=arr[i][j]
            arr[i][j]=0
            score+=arr[i][k];
            updataScore(score);
            continue;
          }
        }
      }
    }
}
setTimeout(updateView,200)
  return true;
}
function moveRight() {
  if(!canMoveRight(arr)){
    return false;
  }
  for(var i=0;i<4;i++) {
    for (var j = 2; j >= 0; j--) {
      if (arr[i][j] != 0) {
        for (var k = 3; k > j; k--) {
          if (arr[i][k] == 0 && noHorizontalCol(i, k, j, arr)) {
            showMoveAnimation(i, j, i, k)
            arr[i][k] = arr[i][j]
            arr[i][j] = 0
            continue;
          } else if (arr[i][k] == arr[i][j] && noHorizontalCol(i, k, j, arr)&& !hasConflicted[i][k]) {
            showMoveAnimation(i, j, i, k)
            hasConflicted[i][k]=true
            arr[i][k] += arr[i][j]
            arr[i][j] = 0
            score+=arr[i][k]
            updataScore(score)
            continue;
          }
        }
      }
    }
  }
  setTimeout(updateView,200)
  return true;
}
function moveUp() {
  if(!canMoveUp(arr)){
    return false;
  }
  for(var j=0;j<4;j++) {
    for (var i = 1; i <4; i++) {
      if (arr[i][j] != 0) {
        for (var k = 0; k < i; k++) {
          if (arr[k][j] == 0 && noHorizontal(j, k, i, arr)) {
            showMoveAnimation(i, j, k, j)
            arr[k][j] = arr[i][j]
            arr[i][j] = 0
            continue;
          } else if (arr[k][j] == arr[i][j] && noHorizontal(j, k, i, arr)&& !hasConflicted[k][j]) {
            showMoveAnimation(i, j, k, j)
            hasConflicted[k][j]=true
            arr[k][j] += arr[i][j]
            arr[i][j] = 0
            score+=arr[k][j]
            updataScore(score)
            continue;
          }
        }
      }
    }
  }
  setTimeout(updateView,200)
  return true;
}
function moveDown() {
  if(!canMoveDown(arr)){
    return false;
  }
  for(var j=0;j<4;j++){
    for(var i=2;i>=0;i--){
      if(arr[i][j]!=0){
        for(var k=3;k>i;k--){
          if(arr[k][j]==0&&noHorizontal(j,i,k,arr)){
            showMoveAnimation(i,j,k,j);
            arr[k][j]=arr[i][j];
            arr[i][j]=0;
            continue;
          }else if(arr[k][j]==arr[i][j]&&noHorizontal(j,i,k,arr)&& !hasConflicted[k][j]){
            showMoveAnimation(i,j,k,j);
            hasConflicted[k][j]=true
            arr[k][j]+=arr[i][j];
            arr[i][j]=0;
            score+=arr[k][j]
            updataScore(score)
            continue;
          }
        }
      }
    }
  }
  setTimeout(updateView,200)
  return true;
}