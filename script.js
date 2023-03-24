const input = document.getElementById('input');
const buttons = document.querySelectorAll('.button-white, .button-gray, .button-orange');
const percentageButton = document.getElementById("percentage");
let result = '';

// Adiciona o evento de click a todos os botões
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        // Limpa a tela se o botão "C" for pressionado
        if (buttonText === 'C') {
            result = '';
            input.value = '';
        }
        // Calcula o resultado se o botão "=" for pressionado
        else if (buttonText === '=') {
            input.value = eval(result);
            result = input.value;
        }
        // Adiciona o número ou operador ao resultado
        else {
            // Trata a porcentagem
            if (buttonText === '%') {
                result += '/100*';
            }
            // Trata a multiplicação
            else if (buttonText === 'x') {
                result += '*';
            }
            // Trata a divisão
            else if (buttonText === '÷') {
                result += '/';
            }
            // Adiciona o número ou operador ao resultado
            else {
                result += buttonText;
            }
            input.value = result;
        }
    });
});
