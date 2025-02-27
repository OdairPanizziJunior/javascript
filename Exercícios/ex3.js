function mostrarUsuario(usuario) {
    var _a, _b;
    console.log("Nome: ".concat(usuario.nome));
    console.log("Idade: ".concat((_a = usuario.idade) !== null && _a !== void 0 ? _a : 18));
    console.log("E-mail: ".concat(usuario.email));
    console.log("Telefone: ".concat((_b = usuario.telefone) !== null && _b !== void 0 ? _b : "Número não informado"));
    console.log("-=-=-=-=-=-".concat(usuario.espaco));
}
var usuarioExemplo1 = {
    nome: "Odair",
    idade: 34,
    email: "odair@gmail.com",
    espaco: "",
};
var usuarioExemplo2 = {
    nome: "Fulano",
    email: "fulano@gmail.com",
    telefone: "123456",
    espaco: "",
};
mostrarUsuario(usuarioExemplo1);
mostrarUsuario(usuarioExemplo2);
