var minhaFolha = {
    cor: 'branca',
    folha: 'A4',
};
var minhaCaneta = {
    cor: 'azul',
    material: 'metal',
};
var minhaEmbalagem = {
    material: 'papel',
    comprimento: 10,
    largura: 10,
};
function escrever(caneta, papel) {
    console.log("Escrevendo na folha ".concat(papel.folha, " ").concat(papel.cor, ", com caneta ").concat(caneta.cor, " e de ").concat(caneta.material));
}
function guardar(caixa) {
    return "Armazedado na embalagem de ".concat(caixa.material);
}
escrever(minhaCaneta, minhaFolha);
var resultado = guardar(minhaEmbalagem);
console.log(resultado);
