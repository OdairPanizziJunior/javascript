interface User{
    nome: string;
    idade?: number;
    email: string;
    telefone?: string;
    espaco: string;
}

function mostrarUsuario(usuario : User) : void{
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade ?? 18}`);
    console.log(`E-mail: ${usuario.email}`);
    console.log(`Telefone: ${usuario.telefone ?? "Número não informado"}`);
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
    email: "fulano@gmail.com",
    telefone: "123456",
    espaco: "",

}


mostrarUsuario(usuarioExemplo1);
mostrarUsuario(usuarioExemplo2);