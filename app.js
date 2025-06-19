import * as funcao from './functions/function.js'
funcao.ApagarTerminal();
let VerificarLoop = true;



while (VerificarLoop) {
    funcao.Menu();
    let Resposta = funcao.Perguntar("Qual opção deseja? ");

    switch (Resposta) {
        case 0:
            VerificarLoop = false;
            funcao.FinalizarAplicacao();
            break;
        case 1:
            funcao.RegistrarVenda();
            //Registrar VENDA
            break;
        case 2:
            //CANCELAR VENDA
            break
        case 3:
            //LISTAR VENDAS DO DIA
            break;
        case 4:
            //LISTAR VENDAS DO DIA
            break;

    }
}