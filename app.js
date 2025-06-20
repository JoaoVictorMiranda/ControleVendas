import * as funcao from './functions/function.js'
import prompt from 'prompt-sync';
const input = prompt();
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
            funcao.CancelarVenda();
            break
        case 3:
            //LISTAR VENDAS DO DIA
            funcao.ListarVendas();
            input("Aperte para Voltar ao MENU")
            break;
        case 4:
            //Listar Produtos em estoque4
            funcao.ApagarTerminal();
            funcao.ListarEstoqueResumido();
            input("Aperte para voltar")
            break;

    }
}