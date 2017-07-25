var calculadora ={};

calculadora = (function () {

  var teclasArray = document.getElementsByClassName("tecla");
  console.log(teclasArray);
  for (var i = 0; i < teclasArray.length; i++) {

    var tecla=teclasArray[i];
    tecla.addEventListener("onclick", function onclick() {

    alert()});
//    tecla.addEventListener("onfocus", mouseUp(tecla.id));

  }
//  function mouseDown(element) {
//    alert(mouseDown)
//    document.getElementById(element).style.width = "60px";
//    document.getElementById(element).style.height = "60px";
//  };
//
//  function mouseUp(element) {
//    document.getElementById(element).style.width = "70px";
//    document.getElementById(element).style.height = "70px";
//  };
//
}());
