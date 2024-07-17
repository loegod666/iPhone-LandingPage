// /*Função de mudar o celular*/
// function imgSlider(e) {
//   var phone = document.getElementById("phone");
//   phone.src = e;
// }

// /*Função de mudar a cor do circulo*/
// function circleChange(color) {
//   const circle = document.querySelector(".circle");
//   circle.style.background = color;
// }

//>> jQuery <<<
/* Função de mudar o celular */
function imgSlider(e) {
  $("#phone").attr("src", e);
}

/* Função de mudar a cor do círculo */
function circleChange(color) {
  $(".circle").css("background", color);
}
