"use strict";

const botaoTrocarImagem = document.getElementById('trocar-imagem');

const fotos = [
    'url("./img/margaridas.avif")',
    'url("./img/girassois.jpeg")',
    'url("./img/lavanda.jpg")',
    'url("./img/rosas.jpg")',
    'url("./img/rosas.jpg")',
    'url("./img/amarelo.jpg")',

];

let troca = 0;

function trocarImagem() {
    troca = (troca + 1) % fotos.length;

    document.documentElement.style.setProperty('--imagem-fundo', fotos[troca]);
}

botaoTrocarImagem.addEventListener('click', trocarImagem);