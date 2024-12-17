// ADICIONANDO TÍTULO À PÁGINA
let titulo = document.createElement("h2");
let corpo = document.querySelector("body");

titulo.innerText = "Produtos a venda"
titulo.id="titulo"

corpo.appendChild(titulo);

// ADICIONANDO PRODUTOS
let produtos = document.createElement("div");

produtos.innerHTML = `
    <h3>Iphone 16 Pro</h3>
    <p>O Apple iPhone 16 Pro Max é um smartphone iOS com características inovadoras que o tornam uma excelente
        opção para qualquer tipo de utilização, representando um dos melhores dispositivos móveis já feitos. A tela 
        de 6.9 polegadas coloca esse Apple no topo de sua categoria. A resolução também é alta: 2868x1320 pixel. As 
        funcionalidades oferecidas pelo Apple iPhone 16 Pro Max são muitas e todas top de linha. Começando pelo 5G 
        que permite a transferência de dados e excelente navegação na internet, além de conectividade Wi-fi e GPS 
        presente no aparelho. Tem também leitor multimídia, videoconferência, e bluetooth. Enfatizamos a excelente 
        memória interna de 1024 GB mas sem a possibilidade de expansão.
        A excelência deste Apple iPhone 16 Pro Max é completada por uma câmera de 48 megapixels que permite tirar 
        fotos fantásticas com uma resolução de 8000x6000 pixels e gravar vídeos em 4K a espantosa resolução de 3840x2160 
        pixels. A espessura de 8.3 milímetros é realmente ótima e torna o Apple iPhone 16 Pro Max ainda mais espetacular.
    </p>
    <img src="./Assets/Apple_i_Phone_16_Pro_color_variants_787dee35fa.webp">
    <p style="font-weight: bolder;">Preço: RS 10.499</p>
`
corpo.appendChild(produtos);