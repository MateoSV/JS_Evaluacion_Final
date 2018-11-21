var Calculadora = (function (){

    function constructor() {
        let teclas = document.getElementsByClassName('tecla');
        let display = document.getElementById('display');
        var pila = [];
        let pila_index = 0;
        for (tecla in teclas) {
            teclas[tecla].onmousedown = add_ClickEfect;
            teclas[tecla].onmouseup = remove_ClickEfect;
        }

        function add_ClickEfect(event) {
            event.target.setAttribute("style", "transform:scale(0.95,0.95)");
            let num = parseInt(event.target.id);

            if (/^([0-9])*$/.test(num)) {

                if ((num == 0 && display.innerHTML == 0) || display.innerHTML.length >= 8) {
                    return;
                }
                display.innerHTML == '0' ? display.innerHTML = event.target.id : display.innerHTML += event.target.id
            }else{
                switch (event.target.id) {
                    case 'on':
                        display.innerHTML = '0';
                        break;
                    case  'sign':
                        break;
                    case 'raiz':
                        break;
                    default:
                        set_values(event.target.id);
                }
            }
        }

        function remove_ClickEfect(event) {
            event.target.setAttribute("style", "transform:scale(1,1)")
        }

        function set_values(operator) {

            pila[pila_index] = parseInt(display.innerHTML);
            
            if (operator == 'igual') {
                getResult();
            }
            
            pila[pila_index+1] = operator;

            display.innerHTML = '';
            pila_index = pila_index+2;
        }
        
        function getResult() {
            if (pila.length % 2 != 0 && pila.length > 1){

                let total = 0;

                for (value in pila) {
                    let temp;
                    let num = pila[value] ;

                    if (/^([0-9])*$/.test(num)) {
                        if (value == 0){
                            total = pila[value]
                        }
                    }else{
                        total = total + pila[value+1];

                    }
                }
            }
        }
    }

    return{
        Init:constructor
    }

});

var x = Calculadora();
x.Init();
