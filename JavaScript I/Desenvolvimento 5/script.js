let titulo = document.querySelector("#titulo");
let link = document.querySelector("a");
let listaN = document.querySelector("ul");
let listaO = document.querySelector("#lista-ordenada");


titulo.innerText = "Aprenda programação na Proz Educação";
link.innerText = "Acesse o site da Proz Educação";

listaN.innerHTML = `
    <li> Aprenda lógica de programação </li>
    <li> Aprenda Noções Básicas de programação com Python </li>
    <li> Aprenda Desenvolvimento Web (HTML + CSS + JS) </li>
`
listaO.innerHTML =`
    <li><a href ="https://www.casadocodigo.com.br/collections/livros-de-programacao">Encontre manuais de programação</a></li>
    <li><a href ="https://itforum.com.br/noticias/5-linguagens-de-programacao/">Ranking das linguagens de programação mais usadas no Brasil</a></li>
    <li><a href ="https://www.alura.com.br/artigos/como-comecar-programar?srsltid=AfmBOoqKFHmjiShLxW2bb4pRSFv-TdR_qKrd2gpB1Q3MwpqMPzRIDUaz">Dicas de programação</a></li>
`
