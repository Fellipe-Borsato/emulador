// Função para abrir a tela do Confronto Visual
function abrirTelaConfrontoVisual() {
    // Oculta o canvas (área de trabalho)
    canvas.style.display = 'none';

    // Cria uma nova tela para o Confronto Visual
    const novaTela = document.createElement('div');
    novaTela.style.position = 'fixed';
    novaTela.style.top = 0;
    novaTela.style.left = 0;
    novaTela.style.width = '100vw';
    novaTela.style.height = '100vh';
    novaTela.style.backgroundColor = '#f0f0f0';
    novaTela.style.display = 'flex';
    novaTela.style.flexDirection = 'column';
    novaTela.style.justifyContent = 'center';
    novaTela.style.alignItems = 'center';

    // Adiciona o título
    const titulo = document.createElement('h1');
    titulo.textContent = 'Confronto visual com o rato!';
    novaTela.appendChild(titulo);

    // Adiciona o botão de iniciar
    const botaoIniciar = document.createElement('button');
    botaoIniciar.textContent = 'Iniciar';
    botaoIniciar.style.padding = '10px 20px';
    botaoIniciar.style.fontSize = '20px';
    novaTela.appendChild(botaoIniciar);

    // Adiciona a nova tela ao corpo da página
    document.body.appendChild(novaTela);

    // Função chamada quando o botão "Iniciar" é clicado
    botaoIniciar.addEventListener('click', function() {
        mostrarRegras(novaTela);
    });
}

// Função para mostrar as regras e iniciar a contagem
function mostrarRegras(tela) {
    // Limpa a tela atual
    tela.innerHTML = '';

    // Adiciona o texto das regras
    const regras = document.createElement('p');
    regras.textContent = '- Manter contato visual\n- Sem rir\n- Sem ofegar';
    regras.style.fontSize = '24px';
    tela.appendChild(regras);

    // Adiciona o botão de "Pronto"
    const botaoPronto = document.createElement('button');
    botaoPronto.textContent = 'Pronto';
    botaoPronto.style.padding = '10px 20px';
    botaoPronto.style.fontSize = '20px';
    tela.appendChild(botaoPronto);

    // Quando o usuário clicar no botão "Pronto", inicia a contagem regressiva
    botaoPronto.addEventListener('click', function() {
        iniciarContagemRegressiva(tela);
    });
}

// Função para iniciar a contagem regressiva
function iniciarContagemRegressiva(tela) {
    tela.innerHTML = '';  // Limpa a tela

    // Elemento para exibir a contagem regressiva
    const contagem = document.createElement('h1');
    contagem.style.fontSize = '50px';
    tela.appendChild(contagem);

    let contador = 5;
    contagem.textContent = contador;

    const intervalo = setInterval(function() {
        contador--;
        contagem.textContent = contador;

        if (contador === 0) {
            clearInterval(intervalo);
            mostrarImagemRato(tela);
        }
    }, 1000);  // Conta de 1 em 1 segundo
}

// Função para exibir a imagem do rato
function mostrarImagemRato(tela) {
    tela.innerHTML = '';  // Limpa a tela

    // Adiciona a imagem do rato
    const imgRato = document.createElement('img');
    imgRato.src = 'img/rato.jpg';  // Certifique-se de ter a imagem do rato na pasta de imagens
    imgRato.style.width = '1000px';
    imgRato.style.height = '600px';
    tela.appendChild(imgRato);
}

// Chama a função para abrir a tela do Confronto Visual
abrirTelaConfrontoVisual();
