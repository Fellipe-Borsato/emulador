function abrirTelaBrincadeiraHonesta() {
    canvas.style.display = 'none';  // Oculta o canvas

    const novaTela = document.createElement('div');
    novaTela.style.position = 'fixed';
    novaTela.style.top = 0;
    novaTela.style.left = 0;
    novaTela.style.width = '100vw';
    novaTela.style.height = '100vh';
    novaTela.style.backgroundColor = '#f0f0f0';
    novaTela.style.display = 'flex';
    novaTela.style.justifyContent = 'center';
    novaTela.style.alignItems = 'center';
    novaTela.innerHTML = '<h1>Você abriu a tela da Brincadeira Honesta!</h1>';

    document.body.appendChild(novaTela);
}

abrirTelaBrincadeiraHonesta();  // Chama a função ao carregar o script
