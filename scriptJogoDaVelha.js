let tabuleiro
let board
let aviso
let jogador
let linha
let coluna

function iniciar() {
    tabuleiro = []
    board = document.getElementById('board')
    aviso = document.getElementById('aviso')
    jogador = 1

    for(let i = 0; i < 3; i++){
        tabuleiro[i] = []
        for(let j = 0; j < 3; j++){
            tabuleiro[i][j] = 0
        }                
    }

    console.table(tabuleiro)
    console.log(tabuleiro)
    exibir()
}

function exibir() {
    let tabela = '<table cellpadding="25" cellspacing="5">'

    for(let i = 0; i < 3; i++){
        tabela += '<tr>'
        for(let j = 0; j < 3; j++){
            switch (tabuleiro[i][j]) {
                case 1: marcador = 'X'; break;
                case -1: marcador = 'O'; break;                       
                default: marcador = '??'; break;                
            }


            tabela += '<td class = "border border-2 ">'+marcador+'</td>'
        }
        tabela += '</tr>'    
    }

    tabela += '</table>'
    board.innerHTML = tabela
}

function jogar() {
    aviso.innerHTML = 'Vez do jogador: ' + numeroJogador()
    linha = document.getElementById('linha').value - 1
    coluna = document.getElementById('coluna').value - 1

    if(tabuleiro[linha][coluna] == 0){
        tabuleiro[linha][coluna] = numeroJogador() == 1 ? 1 : -1
        jogador++        
    } else {
        aviso.innerHTML = 'Esse campo já foi marcado!'
    }
    console.table(tabuleiro)
    console.table(jogador)   
    exibir()
    checar()
}

function checar() {
    //checando linhas
    for (let i = 0; i < 3; i++) {
        let soma = 0
        soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2]

        if (soma == 3 || soma == -3) {
            aviso.innerHTML = 'O jogador ' + numeroJogador() + ' ganhou!'
            document.getElementById("botao").disabled = true
        }        
    }

    //checando colunas
    for (let i = 0; i < 3; i++) {
        let soma = 0
        soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i]

        if(soma == 3 || soma == -3) {
            aviso.innerHTML = 'O jogador ' + numeroJogador() + ' ganhou!'
            document.getElementById("botao").disabled = true
        }        
    }

    //checando diagonal
    somaDiagonal1 = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2]

        if(somaDiagonal1 == 3 || somaDiagonal1 == -3) {
            aviso.innerHTML = 'O jogador ' + numeroJogador() + ' ganhou!'
            document.getElementById("botao").disabled = true
        } 
        
    somaDiagonal2 = tabuleiro[2][0] + tabuleiro[1][1] + tabuleiro[0][2]

        if(somaDiagonal2 == 3 || somaDiagonal2 == -3) {
            aviso.innerHTML = 'O jogador ' + numeroJogador() + ' ganhou!'
            document.getElementById("botao").disabled = true
        }      
        
        if(jogador  == 10) {
            aviso.innerHTML = 'O jogo acabou, tente de novo!'
            document.getElementById("botao").disabled = true
        }
    
}

function numeroJogador() {
    return jogador%2 + 1
}










