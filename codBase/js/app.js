function calculadora(){
  x=document.getElementsByTagName("div")[5]
  y=x.getElementsByClassName("tecla")
  for (var i = 0; i < y.length; i++) {

    y[i].addEventListener("mousedown",mouseDown1);
    y[i].addEventListener("mouseup", mouseUp1);
  }
  x1=document.getElementsByTagName("div")[7]
  y1= x1.getElementsByTagName("img")

  for (var i = 0; i < y1.length; i++) {
  y1[i].addEventListener("mousedown",mouseDown2);
  y1[i].addEventListener("mouseup", mouseUp2);
  }
  x2=document.getElementById('mas')
  x2.addEventListener("mousedown",mouseDown3);
  x2.addEventListener("mouseup", mouseUp3);

  function mouseDown2() {
   this.style.width="28.7%";
   this.style.height="61.91px";
  }
  function mouseUp2() {
   this.style.width="29%";
   this.style.height="62.91px";
 }
 function mouseDown1() {
   this.style.width="21.7%";
   this.style.height="61.91px";
 }
 function mouseUp1() {
   this.style.width="22%";
   this.style.height="62.91px";
 }
 function mouseDown3() {
   this.style.width="89.7%";
   this.style.height="99%";
 }
 function mouseUp3() {
   this.style.width="90%";
   this.style.height="100%";
 }


}
calculadora();
