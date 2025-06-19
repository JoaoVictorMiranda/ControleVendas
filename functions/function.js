import prompt from 'prompt-sync';
const input = prompt();

export function Perguntar(msg) {
    return Number(input(msg));
};

export function ApagarTerminal() {
    process.stdout.write(`\x1B[2J\x1B[0f`);
};

export function Menu() {
    ApagarTerminal();
    console.log(` 
        CONTROLE DE VENDAS
        1. Registrar venda 
        2. Cancelar venda 
        3. Listar vendas do dia 
        4. Listar vendas de um período
        0. Sair 
                `)
};

export function RegistrarVenda() {

}









export function FinalizarAplicacao() {
    ApagarTerminal();
    console.log(` 
            OBRIGADO POR USAR A APLICAÇÃO VOLTE SEMPRE
        `)
};
