// Seleciona o canvas e ajusta para ocupar a tela inteira
const canvas = document.getElementById('EmuladorWindows');
const ctx = canvas.getContext('2d');

// Ajusta o tamanho do canvas para o tamanho da janela
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function drawImage() {
    const img = new Image();
    img.src = 'img/area de trabalho vazia.jpg';  

    img.onload = function() {
        // Agora, a imagem será desenhada ocupando todo o canvas, mesmo que distorça a proporção
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);  // Estica a imagem para ocupar todo o canvas

        desenharIcones();  // Desenha os ícones no lugar dos quadrados vermelhos
    };
}

// Função para desenhar os ícones nas áreas clicáveis
function desenharIcones() {
    // Carrega os ícones
    const pastaVaziaIcon = new Image();
    pastaVaziaIcon.src = 'img/pasta vazia logo.jpg';

    const confrontoVisualIcon = new Image();
    confrontoVisualIcon.src = 'img/confronto visual logo.jpg';

    const brincadeiraHonestaIcon = new Image();
    brincadeiraHonestaIcon.src = 'img/bricadeira honesta logo.jpg';  // Corrigi o nome, caso esteja incorreto

    // Ícone da Pasta Vazia
    pastaVaziaIcon.onload = function() {
        ctx.drawImage(pastaVaziaIcon, 8, 5, 75, 75);  
    };

    // Ícone do Confronto Visual
    confrontoVisualIcon.onload = function() {
        ctx.drawImage(confrontoVisualIcon, 8, 90, 75, 75); 
    };

    // Ícone da Brincadeira Honesta
    brincadeiraHonestaIcon.onload = function() {
        ctx.drawImage(brincadeiraHonestaIcon, 8, 180, 75, 75); 
    };
}

// Detecta cliques no canvas e executa scripts correspondentes
canvas.addEventListener('click', function(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    // Verifica se clicou na Pasta Vazia
    if (x >= 8 && x <= 8 + 75 && y >= 5 && y <= 5 + 75) {
        carregarScript('pasta vazia.js');
    }

    // Verifica se clicou no Confronto Visual
    if (x >= 8 && x <= 8 + 75 && y >= 90 && y <= 90 + 75) {
        carregarScript('Confronto visual.js');
    }

    // Verifica se clicou na Brincadeira Honesta
    if (x >= 8 && x <= 8 + 75 && y >= 180 && y <= 180 + 75) {
        carregarScript('brincadeira honesta.js');
    }
});

// Função para carregar scripts dinamicamente
function carregarScript(scriptName) {
    const script = document.createElement('script');
    script.src = scriptName;
    document.body.appendChild(script);
    console.log(`Carregando o script: ${scriptName}`);
}

// Redimensiona o canvas e desenha a imagem ao carregar a página
resizeCanvas();
drawImage();

// Redimensiona o canvas e redesenha a imagem ao redimensionar a janela
window.addEventListener('resize', () => {
    resizeCanvas();
    drawImage();
});
