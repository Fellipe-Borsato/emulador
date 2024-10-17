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

// Função para exibir a imagem do rato e a explosão de cubinhos roxos
function mostrarImagemRato(tela) {
    tela.innerHTML = '';  // Limpa a tela

    // Adiciona a imagem do rato
    const imgRato = document.createElement('img');
    imgRato.src = 'img/rato.jpg';  // Certifique-se de ter a imagem do rato na pasta de imagens
    imgRato.style.width = '1000px';
    imgRato.style.height = '600px';
    tela.appendChild(imgRato);

    // Inicia a explosão de cubinhos após a imagem do rato aparecer
    iniciarExplosaoCubinhos();
}

// Função para iniciar a explosão de cubinhos roxos
function iniciarExplosaoCubinhos() {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = 0;
    canvas.style.left = 0;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const cubinhos = [];

    // Função para criar cubinhos roxos com propriedades aleatórias
    function criarCubinho() {
        return {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            size: Math.random() * 10 + 5,
            dx: (Math.random() - 0.5) * 8,
            dy: (Math.random() - 0.5) * 8,
            color: 'rgba(128, 0, 128, 1)'  // Roxo
        };
    }

    // Cria 50 cubinhos iniciais
    for (let i = 0; i < 50; i++) {
        cubinhos.push(criarCubinho());
    }

    // Função para atualizar e desenhar os cubinhos
    function atualizarCubinhos() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        cubinhos.forEach((cubinho, index) => {
            // Move o cubinho
            cubinho.x += cubinho.dx;
            cubinho.y += cubinho.dy;

            // Desenha o cubinho
            ctx.fillStyle = cubinho.color;
            ctx.fillRect(cubinho.x, cubinho.y, cubinho.size, cubinho.size);

            // Remove o cubinho se ele sair da tela
            if (cubinho.x < 0 || cubinho.x > canvas.width || cubinho.y < 0 || cubinho.y > canvas.height) {
                cubinhos.splice(index, 1);  // Remove o cubinho quando atingir a borda
            }
        });

        // Continua a animação se ainda houver cubinhos
        if (cubinhos.length > 0) {
            requestAnimationFrame(atualizarCubinhos);
        } else {
            document.body.removeChild(canvas);  // Remove o canvas quando todos os cubinhos desaparecerem
        }
    }

    // Inicia a animação
    atualizarCubinhos();
}

// Chama a função para abrir a tela do Confronto Visual
abrirTelaConfrontoVisual();
