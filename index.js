function hello(name) {
    let welcome = `Bem-Vindo ${name}`;
    write(welcome, 3);
}

function write(phrase, type) {

    switch (type) {
        case 1:
            console.log(phrase);
            break;
        case 2:
            alert(phrase);
            break;
        case 3:
            document.write(phrase);
            break;    
        default:
            document.write(phrase);
    }
    
}

hello('Visitante - ESTÁ É SAÍDA de JS ou JS na tela!');