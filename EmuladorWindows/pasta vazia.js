// Define um contador para controlar a troca das telas
let telaAtual = 1;
const totalTelas = 8;  // Agora incluímos até a tela 8

// Função para abrir a tela da Pasta Vazia e exibir a primeira imagem
function abrirTelaPastaVazia() {
    // Oculta o canvas (área de trabalho)
    canvas.style.display = 'none';

    // Cria uma nova tela para exibir a imagem inicial (tela1)
    const novaTela = document.createElement('div');
    novaTela.style.position = 'fixed';
    novaTela.style.top = 0;
    novaTela.style.left = 0;
    novaTela.style.width = '100vw';
    novaTela.style.height = '100vh';
    novaTela.style.backgroundColor = '#000';  // Fundo preto para evitar bordas brancas

    // Adiciona a primeira imagem (tela1)
    const img = document.createElement('img');
    img.src = `img/pasta${telaAtual}.jpg`;  // Começa com a imagem "pasta1.jpg"
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';  // Para garantir que a imagem ocupe a tela inteira sem distorcer
    novaTela.appendChild(img);

    // Adiciona a área clicável sem o quadrado vermelho
    const areaClicavel = document.createElement('div');
    areaClicavel.style.position = 'absolute';
    areaClicavel.style.top = '250px';  // Posição vertical
    areaClicavel.style.left = '368px';  // Posição horizontal
    areaClicavel.style.width = '85px';  // Largura da área clicável
    areaClicavel.style.height = '85px';  // Altura da área clicável
    areaClicavel.style.cursor = 'pointer';

    // Evento de clique na área clicável
    areaClicavel.addEventListener('click', function() {
        avancarTela(img);
    });

    // Adiciona a área clicável e a imagem à nova tela
    novaTela.appendChild(areaClicavel);
    document.body.appendChild(novaTela);
}

// Função para avançar para a próxima tela
function avancarTela(imagem) {
    telaAtual++;
    if (telaAtual > totalTelas) {
        telaAtual = totalTelas;  // Quando chegar à tela8, para nela e não volta
    }
    imagem.src = `img/pasta${telaAtual}.jpg`;  // Atualiza a imagem para a próxima
}

// Chama a função para abrir a tela da Pasta Vazia com a primeira imagem
abrirTelaPastaVazia();
