const user = {name: "Abel", surname: "Cabeza"}

function a(user){
    const name = b(user.name);
    console.log(name)
}

function b(name){
    return "Que pasa " + name;
}

a(user);