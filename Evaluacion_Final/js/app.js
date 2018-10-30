var Calculadora = (function (){

  function constructor(){
    var teclas = document.getElementsByClassName('tecla');

    for (i = 0; i < teclas.length; i++){
      teclas[i].onmousedown = add_ClickEfect;
      teclas[i].onmouseup =  remove_ClickEfect;
    }

    function add_ClickEfect(event){
          event.target.setAttribute("style","transform:scale(0.95,0.95)")
    }

    function remove_ClickEfect(event){

          event.target.setAttribute("style","transform:scale(1,1)")
    }

  }

  return{
    Init:constructor
  }

});

var x = Calculadora();
x.Init();
