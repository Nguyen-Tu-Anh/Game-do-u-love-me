function changePositionBtn() {
    document.getElementById('btn-no').style.top =  Math.floor(Math.random() * 500) + "px";
    document.getElementById('btn-no').style.left= Math.floor(Math.random() * 500) + "px";


}
var button = document.getElementById('btn-yes');
    button.onclick = function(){
        alert("You are Right!!!");
        document.getElementById('btn-yes').style.color = "red";
    }
    