let num = document.querySelector('#formNumber');
let lista = document.querySelector('#formArea');
let resultado = document.querySelector('#resultado');
let valores = [];

function adicionar() {
    let number = Number(num.value);

    if (isNaN(number) || number <= 0 || number >= 100) {
        alert('Por favor, insira um número válido entre 1 e 100.');
        return;
    }

    if (valores.includes(number)) {
        alert('Este número já foi adicionado.');
        return;
    }

    valores.push(number);
    lista.value += `Valor ${number} adicionado\n`;

    num.value = '';
    num.focus();
}

function finalizar() {
    if (valores.length === 0) {
        alert('Adicione pelo menos um número antes de finalizar.');
        return;
    }

    let total = valores.length;
    let maior = Math.max(...valores);
    let menor = Math.min(...valores);
    let soma = valores.reduce((acc, num) => acc + num, 0);
    let media = (soma / total).toFixed(2);

    resultado.innerHTML = `
        <p>Total de números adicionados: ${total}</p>
        <p>Maior número: ${maior}</p>
        <p>Menor número: ${menor}</p>
        <p>Soma dos valores: ${soma}</p>
        <p>Média dos valores: ${media}</p>
    `;
}
