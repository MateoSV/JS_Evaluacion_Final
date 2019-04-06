var Calculadora = (function (){

    function constructor() {
        let teclas = document.getElementsByClassName('tecla');
        let display = document.getElementById('display');

        for (tecla in teclas) {
            teclas[tecla].onmousedown = add_ClickEfect;
            teclas[tecla].onmouseup = remove_ClickEfect;
        }

        function add_ClickEfect(event) {
            event.target.setAttribute("style", "transform:scale(0.95,0.95)");
            let num = parseFloat(event.target.id);

            if (/^([0-9])*$/.test(num)) {
                
                if ((num == 0 && display.innerHTML == 0) || display.innerHTML.length >= 8) {
                    return;
                }

                if (sessionStorage.getItem('result') == display.innerHTML || display.innerHTML == '0') {
                    display.innerHTML = event.target.id
                }else{
                    display.innerHTML += event.target.id
                }
            }else{

                switch (event.target.id) {
                    case 'on':
                        display.innerHTML = '0';
                        break;
                    case 'punto':
                        addPoint();
                        break;
                    case 'sign':
                        addSing();
                        break;
                    case 'mas':
                        operation('+');
                        break;
                    case 'menos':
                        operation('-');
                        break;
                    case 'por':
                        operation('*');
                        break;
                    case 'dividido':
                        operation('/');
                        break;
                    case 'igual':
                        result();
                        break;
                }
            }
        }

        function remove_ClickEfect(event) {
            event.target.setAttribute("style", "transform:scale(1,1)")
        }

        function addPoint() {
            if(display.innerHTML.indexOf('.') == -1){
                display.innerHTML += '.';
            }
        }

        function addSing() {

            if(display.innerHTML.indexOf('-') == -1 && display.innerHTML != 0){
                display.innerHTML = '-'+display.innerHTML;
            }else if(display.innerHTML.indexOf('-') != -1){
                display.innerHTML =  display.innerHTML.replace('-', "");
            }
        }
        function operation(symbol) {
            sessionStorage.setItem('number', display.innerHTML);
            sessionStorage.setItem('operation_symbol', symbol);
            display.innerHTML = '';
        }
        function result() {
            let number = sessionStorage.getItem('number');
            let symbol = sessionStorage.getItem('operation_symbol');
            let result;
            switch (symbol) {
                case '+':
                    console.log(parseFloat(number) , parseFloat(display.innerHTML));
                    result = parseFloat(number) + parseFloat(display.innerHTML);
                    break;
                case '-':
                    result = parseFloat(number) - parseFloat(display.innerHTML);
                    break;
                case '*':
                    result = parseFloat(number) * parseFloat(display.innerHTML);
                    break;
                case '/':
                    result = parseFloat(number) / parseFloat(display.innerHTML);
                    break;
            }

            result = result.toString();
            display.innerHTML = result >= 8 ? result.substr(0,8) : result;
            sessionStorage.setItem('result', result);
        }
    }

    return{
        Init:constructor
    }

});

var x = Calculadora();
x.Init();
