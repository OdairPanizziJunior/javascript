interface User{
    nome: string;
    idade: number;
    email: string;
    espaco: string;
}

function mostrarUsuario(usuario : User) : void{
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
    console.log(`E-mail: ${usuario.email}`);
    console.log(`-=-=-=-=-=-${usuario.espaco}`);

}

const usuarioExemplo1: User = {
    nome: "Odair",
    idade: 34,
    email: "odair@gmail.com",
    espaco: "",

}

const usuarioExemplo2: User = {
    nome: "Fulano",
    idade: 20,
    email: "fulano@gmail.com",
    espaco: "",

}


mostrarUsuario(usuarioExemplo1);
mostrarUsuario(usuarioExemplo2);