interface Caneta{
    marca: string;
    modelo: string;
    material: string;
    cor: string;
}

function dadosCaneta(caneta : Caneta):void{
    console.log(`Marca: ${caneta.marca}`);
    console.log(`Modelo: ${caneta.modelo}`);
    console.log(`Material: ${caneta.material}`);
    console.log(`Cor: ${caneta.cor}`);
}

const montarCaneta : Caneta = {
    marca: "Bic",
    modelo: "Movelo V2",
    material: "Plástico",
    cor: "Preta",
}

dadosCaneta(montarCaneta);