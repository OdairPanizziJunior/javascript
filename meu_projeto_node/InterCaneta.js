function dadosCaneta(caneta) {
    console.log("Marca: ".concat(caneta.marca));
    console.log("Modelo: ".concat(caneta.modelo));
    console.log("Material: ".concat(caneta.material));
    console.log("Cor: ".concat(caneta.cor));
}
var montarCaneta = {
    marca: "Bic",
    modelo: "Movelo V2",
    material: "Plástico",
    cor: "Preta",
};
dadosCaneta(montarCaneta);
