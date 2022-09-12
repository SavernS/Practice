
function getImage(){
    var picSpot = document.getElementById("coolPhoto");
    console.log(picSpot);
    picSpot.innerHTML="<img src = 'images/code.jpg'/>";

}
function hideImage(){
    var picSpot = document.getElementById("coolPhoto");
    picSpot.innerHTML="";

}