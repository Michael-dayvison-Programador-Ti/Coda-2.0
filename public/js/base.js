const nome = "Michael";
let nome2 = "";
let pessoaDefault = {
    nome: "Michael",
    idade: "35",
    trabalho: "trabalhador" 
}

let nomes = ["Michael", "Maria","João"]
let pessoas = [
    {
        nome: "Michael",
        idade: "35",
        trabalho: "trabalhador"  
    },
    {
        nome: "Maria",
        idade: "30",
        trabalho: "trabalhadora"
    },
    {
        nome: "João",
        idade: "25",
        trabalho: "trabalhador"
    }
]

function alterarnome() {
    nome2 = "Lucas"
    console.log("Valor alterado:")
    console.log(nome2)
}

function recebeEalteranome (novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("trabalho:");
    console.log(pessoa.trabalho);  
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("---IMPRIMIR PESSOAS---");
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("trabalho:");
        console.log(item.trabalho); 
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Carol",
    idade: "20",
    trabalho: "trabalhadora"
});

imprimirPessoas();
