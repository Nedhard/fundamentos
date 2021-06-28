const cliente = {
   codigo:123,
    nome: 'ana',
    vip: true,
    endereco: {
        logradouro: 'rua abc',
        numero: 123,
        complemento: 'apto 101'
    },
    nomeFilhos:['bia']
};

console.log(cliente.endereco.complemento)