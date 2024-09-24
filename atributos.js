// Criando um objeto "pessoa"
let pessoa = {
    nome: "Maria",
    idade: 30,
    profissao: "Engenheira"
};

// Acessando atributos
console.log(pessoa.nome); // Saída: Maria
console.log(pessoa['idade']); // Saída: 30

// Modificando atributos
pessoa.profissao = "Arquiteta";
console.log(pessoa.profissao); // Saída: Arquiteta

// Adicionando um novo atributo
pessoa.cidade = "São Paulo";
console.log(pessoa.cidade); // Saída: São Paulo