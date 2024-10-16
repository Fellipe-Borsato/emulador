// Função para abrir a tela inicial do jogo Pedra, Papel e Tesoura
function abrirTelaPedraPapelTesoura() {
    // Oculta o canvas (área de trabalho)
    canvas.style.display = 'none';

    // Cria uma nova tela para o jogo
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
    titulo.textContent = 'Pedra, Papel e Tesoura';
    novaTela.appendChild(titulo);

    // Cria a área das opções
    const opcoes = document.createElement('div');
    opcoes.style.display = 'flex';
    opcoes.style.justifyContent = 'space-around';
    opcoes.style.width = '650px';

    // Adiciona as opções de jogadas
    const pedra = criarOpcao('pedra', 'img/pedra.jpg');  
    const papel = criarOpcao('Papel', 'img/papel.jpg');  
    const tesoura = criarOpcao('Tesoura', 'img/tesoura.jpg');  

    // Adiciona as opções ao div de opções
    opcoes.appendChild(pedra);
    opcoes.appendChild(papel);
    opcoes.appendChild(tesoura);

    // Adiciona as opções à nova tela
    novaTela.appendChild(opcoes);

    // Adiciona a nova tela ao corpo da página
    document.body.appendChild(novaTela);
}

// Função para criar uma opção de jogada
function criarOpcao(nome, caminhoImagem) {
    const opcaoDiv = document.createElement('div');
    opcaoDiv.style.display = 'flex';
    opcaoDiv.style.flexDirection = 'column';
    opcaoDiv.style.alignItems = 'center';
    opcaoDiv.style.cursor = 'pointer';

    const img = document.createElement('img');
    img.src = caminhoImagem;
    img.style.width = '200px';
    img.style.height = '200px';
    img.alt = nome;

    const texto = document.createElement('p');
    texto.textContent = nome;

    opcaoDiv.appendChild(img);
    opcaoDiv.appendChild(texto);

    // Adiciona evento de clique à opção
    opcaoDiv.addEventListener('click', function() {
        const jogadaCPU = jogadaVencedora(nome); // A CPU faz a jogada vencedora
        const resultado = calcularResultado(nome, jogadaCPU); // Calcula o resultado
        alert(`Você escolheu ${nome}!\nAdversário escolheu ${jogadaCPU}!\nResultado: ${resultado}`);
    });

    return opcaoDiv;
}

// Função para a CPU sempre vencer
function jogadaVencedora(jogadaJogador) {
    if (jogadaJogador === 'pedra') {
        return 'Papel';  // Papel vence Pedra
    } else if (jogadaJogador === 'Papel') {
        return 'Tesoura';  // Tesoura vence Papel
    } else {
        return 'Pedra';  // Pedra vence Tesoura
    }
}

// Função para calcular o resultado
function calcularResultado(jogadaJogador, jogadaCPU) {
    if (jogadaJogador === jogadaCPU) {
        return 'Empate';
    } else {
        return 'Derrota';  // A CPU sempre vai ganhar
    }
}

// Chama a função para abrir a tela inicial do jogo
abrirTelaPedraPapelTesoura();
