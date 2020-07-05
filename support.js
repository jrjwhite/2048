documentWidth = window.screen.availWidth;
gridContainerWidth = 0.92*documentWidth;
cellSideLength = 0.18*documentWidth;
cellSpace = 0.04*documentWidth;
function getPosTop(i,j) {
  return cellSpace + i*(cellSpace+cellSideLength);
}
function getPosLeft(i,j) {
  return cellSpace + j*(cellSpace+cellSideLength);
}
function getNumberBackgroundColor(number) {
  switch (number){
    case 2:return "#eee4da";break;
    case 4:return "#ede0c8";break;
    case 8:return "#f2b179";break;
    case 16:return "#f59563";break;
    case 32:return "#f67c5f";break;
    case 64:return "#f65e3b";break;
    case 128:return "#edcf72";break;
    case 256:return "#edcc61";break;
    case 512:return "#9c0";break;
    case 1024:return "#33b5e5";break;
    case 2048:return "#09c";break;
    case 4096:return "#a6c";break;
    case 8192:return "#93c";break;

  }
  return "black";
}
function nospace(arr) {
  for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
      if(arr[i][j]==0){
        return false;
      }

    }
  }
  return true;
}
function getNumberColor(number) {
  if(number<=4){
    return "#776e65";
  }
  return "white";
}
function canMoveLeft(arr) {
  for(var i=0;i<4;i++){
    for(var j=1;j<4;j++){
      if(arr[i][j]!=0){
        if(arr[i][j-1]==0 || arr[i][j-1]==arr[i][j]){
          return true;
        }
      }
    }
  }
  return false;
}
function canMoveRight(arr) {
  for(var i=0;i<4;i++){
    for(var j=2;j>=0;j--){
      if(arr[i][j]!=0){
        if(arr[i][j+1]==0 || arr[i][j+1]==arr[i][j]){
          return true;
        }
      }
    }
  }
  return false;
}
function canMoveUp(arr) {
  for(var j=0;j<4;j++){
    for(var i=1;i<4;i++){
      if(arr[i][j]!=0){
        if(arr[i-1][j]==0 || arr[i-1][j]==arr[i][j]){
          return true;
        }
      }
    }
  }
  return false;
}
function canMoveDown(arr) {
  for(var j=0;j<4;j++){
    for(var i=2;i>=0;i--){
      if(arr[i][j]!=0){
        if(arr[i+1][j]==0 || arr[i+1][j]==arr[i][j]){
          return true;
        }
      }
    }
  }
  return false;
}
//判断两个格子之间的格子是否为空
function noHorizontalCol(row,col1,col2,arr) {
  for(var i=col1+1;i<col2;i++){
    if(arr[row][i]!=0){
      return false;
    }
  }
  return true;
}
function noHorizontal(col,row1,row2,arr) {
  for(var i=row1+1;i<row2;i++){
    if(arr[i][col]!=0){
      return false;
    }
  }
  return true;
}
function nomove(arr) {
  if(canMoveDown(arr)||canMoveLeft(arr)||canMoveRight(arr)||canMoveUp(arr)){
    return false;
  }
  return true;
}