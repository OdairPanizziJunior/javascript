interface Caneta{
    cor: string;
    material: string;
}

interface Papel{
    cor: string;
    folha: string;
}

interface Caixa{
    material: string;
    comprimento: number;
    largura: number;
}

const minhaFolha: Papel = {
    cor: 'branca',
    folha: 'A4',
}

const minhaCaneta: Caneta = {
    cor: 'azul',
    material: 'metal',
};

const minhaEmbalagem: Caixa = {
    material: 'papel',
    comprimento: 10,
    largura: 10,
};

function escrever(caneta: Caneta, papel: Papel) : void{
    console.log(`Escrevendo na folha ${papel.folha} ${papel.cor}, com caneta ${caneta.cor} e de ${caneta.material}`);
}

function guardar(caixa: Caixa) : string{
    return `Armazedado na embalagem de ${caixa.material}`;
}

escrever(minhaCaneta, minhaFolha);

let resultado = guardar(minhaEmbalagem);
console.log(resultado);