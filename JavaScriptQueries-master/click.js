//declare samecolor() here
function samecolor(){
    let color = "#009900";

    let divs = document.querySelectorAll("#samecolor div");

    for(var i=0;i<divs.length;i++;){
      divs[i].style.backgroundColor = newcolor;
      divs[i].style.ocapity = Math.random();
  }
}
//declare diffcolor() here
function diffcolor(){
    let color = "#000000";
    let complement = "#990000";
    let divs2 = document.querySelectorAll("#diffcolor div");
    for(let x=0;x<divs2.length;x++){
      if(x==0 | | x==2 | | x==4 | | x==6 | | x==8){
        divs[x].style.backgroundColor = "#784500"
      }
      else{
        divs2[x].style.backgroundColor = "#890034"
      }
    }
}
