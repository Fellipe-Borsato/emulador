// Seleciona o canvas e ajusta para ocupar a tela inteira
const canvas = document.getElementById('EmuladorWindows');
const ctx = canvas.getContext('2d');

// Ajusta o tamanho do canvas para o tamanho da janela
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Carrega a imagem de fundo e redimensiona o canvas
function drawImage() {
    const img = new Image();
    img.src = 'img/area de trabalho.jpg';  // Caminho relativo para a imagem

    img.onload = function() {
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        const imgWidth = img.width * scale;
        const imgHeight = img.height * scale;

        const x = (canvas.width - imgWidth) / 2;
        const y = (canvas.height - imgHeight) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
        ctx.drawImage(img, x, y, imgWidth, imgHeight);

        desenharQuadradosClicaveis();  // Desenha as áreas clicáveis
    };
}

// Função para desenhar os quadrados vermelhos nas áreas clicáveis
function desenharQuadradosClicaveis() {
    // Área da Pasta Vazia
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.strokeRect(8, 5, 50, 50);  // Pasta Vazia

    // Área do Confronto Visual
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.strokeRect(8, 90, 50, 50);  // Confronto Visual

    // Área da Brincadeira Honesta
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.strokeRect(8, 180, 50, 50);  // Brincadeira Honesta
}

// Detecta o clique no canvas e carrega os scripts corretos
canvas.addEventListener('click', function(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    // Verifica se clicou na Pasta Vazia
    if (x >= 8 && x <= 8 + 50 && y >= 5 && y <= 5 + 50) {
        carregarScript('pasta vazia.js');
    }

    // Verifica se clicou no Confronto Visual
    if (x >= 8 && x <= 8 + 50 && y >= 90 && y <= 90 + 50) {
        carregarScript('Confronto visual.js');
    }

    // Verifica se clicou na Brincadeira Honesta
    if (x >= 8 && x <= 8 + 50 && y >= 180 && y <= 180 + 50) {
        carregarScript('brincadeira honesta.js');
    }
});

// Função para carregar os scripts dinamicamente
function carregarScript(scriptName) {
    const script = document.createElement('script');
    script.src = scriptName;
    document.body.appendChild(script);
}

// Redimensiona o canvas e desenha a imagem quando a página carregar
resizeCanvas();
drawImage();

// Redimensiona o canvas e redesenha a imagem quando a janela for redimensionada
window.addEventListener('resize', () => {
    resizeCanvas();
    drawImage();
});
