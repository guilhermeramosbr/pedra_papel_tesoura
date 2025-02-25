const resultado = document.querySelector('#resultado');
const botoes = document.querySelectorAll('.opcao');


function sortear() {
    const opcoes = ['🪨', '📜', '✂️'];
    return opcoes[Math.floor(Math.random() * 3)];
}


function batalhar(escolha, sorteio) {
    const regras = {
        '🪨': '✂️', 
        '📜': '🪨', 
        '✂️': '📜'  
    };

    if (escolha === sorteio) {
        resultado.textContent = `${sorteio} - Empatamos!`;
    } else if (regras[escolha] === sorteio) {
        resultado.textContent = `${sorteio} - Você ganhou! 🎉`;
    } else {
        resultado.textContent = `${sorteio} - Eu ganhei! 😈`;
    }
}

botoes.forEach(botao => {
    botao.addEventListener('click', function() {
        const mapeamento = { pedra: '🪨', papel: '📜', tesoura: '✂️' };
        let escolha = mapeamento[this.dataset.escolha]; 
        let sorteio = sortear();
        batalhar(escolha, sorteio); 
    });
});
