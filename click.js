//declare samecolor() here
function samecolor(){
    let color = "#009900";

    let divs = document.querySelectorAll("#samecolor div");

    for(var i = 0; i < divs.length; i++;){
    divs[i].style.backgroundColor = color;
    divs[i].style.ocapity = 0.30;
  }
}
//declare diffcolor() here
function diffcolor(){
    let color = "#999900"
}
