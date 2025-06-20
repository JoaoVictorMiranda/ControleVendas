import prompt from 'prompt-sync';
import chalk from 'chalk'
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
        ${chalk.bold('>> A Oficina Submersa de Elias Grimwald – Sussurros do Relicário de Vapor <<')}
                ${chalk.bold.dim(GerarFrase())}
        CONTROLE DE VENDAS
        1. Registrar venda 
        2. Cancelar venda 
        3. Listar vendas do dia 
        4. Listar vendas de um período
        0. Sair 
                `)
};


export function ListarEstoque() {
    for (let item of ProdutosEstoque) {
        console.log(item)
    }
}
export function ListarEstoqueResumido() {
    let i = 0;
    for (let item of ProdutosEstoque) {
        console.log(`[${i}] 🔹 ${item.Nome} — Quantidade: ${item.QtProduto}`);
        i++;
    }
}

export function RegistrarVenda() {
    ApagarTerminal();
    console.log(`          
        ${chalk.bold('>> A Oficina Submersa de Elias Grimwald – Sussurros do Relicário de Vapor <<')}
                ${chalk.bold.dim(GerarFrase())}
                REGISTRAR VENDAS `);
    ListarEstoqueResumido();
    let Produto = Number(input("Qual foi vendido?  "));
    if (ProdutosEstoque[Produto].QtProduto <= 0) {
        console.log("Não ah mais deste produto em estoque...");
    } else {
        VendasTotais.push({
            QtdVendida: 1,
            Produto: ProdutosEstoque[Produto].Nome,
            Preco: ProdutosEstoque[Produto].preco,
            Cliente: input("Gostaria de informar o cliente?")
        }
        )
        ProdutosEstoque[Produto].QtProduto--;
        console.log(` ${ProdutosEstoque[Produto].Nome}, VENDIDO `)
        input("Aperte para continuar...")
    }
    ApagarTerminal();
    if (ProdutosEstoque[Produto].QtProduto == 0) {
        ProdutosEstoque.splice(Produto, 1);
    }
    console.log("ATUALIZADO")
    ListarEstoqueResumido();
    input("Aperte para continuar...")
}


export function ListarVendas() {
    if (VendasTotais.length <= 0) {
        ApagarTerminal();
        console.log("Não foram feitas vendas ainda hoje")
        input("Aperte para voltar ao menu")
    } else {
        ApagarTerminal();
        let i = 0;
        for (let item of VendasTotais) {
            console.log(`[${i}] 🔹 ${item.Produto} — Quantidade: ${item.QtdVendida}`);
            i++;
        }
        input("Aperte para Voltar ao MENU")
    }


}


let VendasTotais = [
]


let ProdutosEstoque = [
    {
        Nome: "Coração de Éter Sussurrante",
        Descricao: "Unidade energética ancestral usada para dar 'vida' ao núcleo de autômatos sensitivos.",
        preco: 3500.55,
        Finalidade: "Animação de Núcleo",
        Material: "Cristal de Vapor",
        Origem: "Câmara Silenciosa de Grimwald",
        Fabricacao: 1842,
        Categoria: "Raro",
        EstadoDeConservacao: "Estável",
        QtProduto: 2
    }, {
        Nome: "Lente de Vislumbre Temporal",
        Descricao: "Permite ao autômato prever trajetórias mecânicas futuras com precisão absurda.",
        preco: 1280.00,
        Finalidade: "Antecipação de Movimento",
        Material: "Vidro Élfico Refratado",
        Origem: "Laboratório Subterrâneo de Luthen Kaal",
        Fabricacao: 1897,
        Categoria: "Único",
        EstadoDeConservacao: "Frágil",
        QtProduto: 1
    },
    {
        Nome: "Engrenagem de Sangue Negro",
        Descricao: "Peça de ligação central que retém memória mecânica de gerações de uso.",
        preco: 212.75,
        Finalidade: "Memória Mecânica",
        Material: "Ferro Vivo",
        Origem: "Minas Abissais de Ul'Dakar",
        Fabricacao: 1784,
        Categoria: "Fundamental",
        EstadoDeConservacao: "Oxidada",
        QtProduto: 6
    },
    {
        Nome: "Chave Cantante de Kirell",
        Descricao: "Dispositivo de ativação que emite uma frequência harmônica específica.",
        preco: 987.90,
        Finalidade: "Ativação de Mecanismos",
        Material: "Latão Sonoro",
        Origem: "Templo Sonoro de Kirell",
        Fabricacao: 1811,
        Categoria: "Funcional",
        EstadoDeConservacao: "Perfeita",
        QtProduto: 3
    },
    {
        Nome: "Válvula de Névoa Densa",
        Descricao: "Permite o controle fino de fluxo de vapor em ambientes úmidos e instáveis.",
        preco: 425.00,
        Finalidade: "Regulação de Pressão",
        Material: "Aço Alquímico",
        Origem: "Estaleiro Oculto de Nebriss",
        Fabricacao: 1860,
        Categoria: "Comum",
        EstadoDeConservacao: "Boa",
        QtProduto: 10
    },
    {
        Nome: "Fio de Ouro Arcano",
        Descricao: "Conduz não apenas energia, mas intenção — usado em interfaces sensitivas.",
        preco: 1700.00,
        Finalidade: "Transmissão de Intenção",
        Material: "Ouro Trançado com Filigrana Mágica",
        Origem: "Ateliê da Rosa Vazia",
        Fabricacao: 1901,
        Categoria: "Raro",
        EstadoDeConservacao: "Intacto",
        QtProduto: 4
    }
]

export function GerarFrase() {
    let math = Math.floor(Math.random() * Frases.length);
    return Frases[math];
}

let Frases = [
    "O Berço das Engrenagens onde tudo começou, antes mesmo da primeira faísca",
    "A Oficina Submersa nas lágrimas do tempo, onde as máquinas sonham em silêncio",
    "A Forja Silenciosa que ainda pulsa sob a montanha esquecida",
    "Sussurros de Bronze entre estantes empoeiradas e memórias lubrificadas",
    "O Relicário do Vapor onde cada peça tem alma e cada alma pesa em ferro",
    "A Oficina das Almas Ocultas, proibida até mesmo aos inventores mais ousados",
    "O Útero do Aço onde nascem as criações que desafiam o tempo e a razão",
    "O Coração das Máquinas Cansadas, ainda batendo após séculos de esquecimento",
    "A Catedral das Molas Partidas onde até o tempo range ao caminhar",
    "O Último Suspiro do Pistão que outrora moveu reinos e hoje repousa em ferrugem",
    "O Véu de Fuligem sob o qual as engrenagens sussurram segredos perdidos",
    "O Santuário das Chaves Desalinhadas, guardião das peças que ninguém mais recorda",
    "O Arsenal da Melancolia Mecânica, onde cada peça carrega uma derrota",
    "A Sala de Recalibração da Eternidade, onde autômatos aprendem a morrer devagar",
    "A Banca dos Itens Proibidos, onde peças amaldiçoadas trocam de mãos silenciosas",
    "O Poço das Engrenagens Esquecidas, lar das invenções que falharam em viver"
];




export function FinalizarAplicacao() {
    ApagarTerminal();
    console.log(` 
            ${chalk.bold.dim(GerarFrase())}
            OBRIGADO POR USAR A APLICAÇÃO VOLTE SEMPRE
        `)
};
