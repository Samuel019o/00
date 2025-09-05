document.addEventListener('DOMContentLoaded',  () {
     botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
     opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', n () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

    })

     aumentaFonteBotao = document.getElementById('aumentar-fonte');
 diminuiFonteBotao = document.getElementById('diminuir-fonte');

    t tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click',  () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click',  () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })
})
