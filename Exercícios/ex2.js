function mostrarUsuario(usuario) {
    console.log("Nome: ".concat(usuario.nome));
    console.log("Idade: ".concat(usuario.idade));
    console.log("E-mail: ".concat(usuario.email));
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
    idade: 20,
    email: "fulano@gmail.com",
    espaco: "",
};
mostrarUsuario(usuarioExemplo1);
mostrarUsuario(usuarioExemplo2);
