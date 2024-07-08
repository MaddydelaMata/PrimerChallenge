function mostrarResultado() {
    const textoUsuario = document.getElementById('textoUsuario').value;
    const imagen = document.getElementById('imagen');
    const textoResultado = document.getElementById('textoResultado');
    const botonesCopiar = document.getElementById('botonesCopiar');

    if (textoUsuario.trim() !== "") {
        imagen.style.display = 'none';
        textoResultado.style.display = 'block';
        botonesCopiar.style.display = 'block';
    } else {
        imagen.style.display = 'block';
        textoResultado.style.display = 'none';
        botonesCopiar.style.display = 'none';
    }
}

function verificarEncriptado() {
    const textoUsuario = document.getElementById('textoUsuario').value;
    const textoResultado = document.getElementById('textoResultado');
    textoResultado.value = encriptar(textoUsuario);
    mostrarResultado();
}

function verificarDesencriptar() {
    const textoUsuario = document.getElementById('textoUsuario').value;
    const textoResultado = document.getElementById('textoResultado');
    textoResultado.value = desencriptar(textoUsuario);
    mostrarResultado();
}

function verificarCopiado() {
    const textoResultado = document.getElementById('textoResultado');
    textoResultado.select();
    document.execCommand('copy');
}

function encriptar() {
    const contenido_antes = document.getElementById("contenido_antes");
    const contenido_despues = document.getElementById("contenido_despues");
    const texto = document.getElementById("texto").value;
    const texto_encriptado = document.getElementById("texto_encriptado")

    contenido_antes.style.display = 'none';
    contenido_despues.style.display = 'flex';

    let nuevotexto = "";
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            nuevotexto += "ai";
        }
        else if (texto[i] === "e") {
            nuevotexto += "enter";
        }
        else if (texto[i] === "i") {
            nuevotexto += "imes";
        }
        else if (texto[i] === "o") {
            nuevotexto += "ober";
        }
        else if (texto[i] === "u") {
            nuevotexto += "ufat";
        }
        else {
            nuevotexto += texto[i];
        }
    }

    texto_encriptado.innerHTML = nuevotexto 
    document.getElementById("texto").value = "";
}

function desencriptar() {
    const contenido_antes = document.getElementById("contenido_antes");
    const contenido_despues = document.getElementById("contenido_despues");
    const texto = document.getElementById("texto").value;
    const texto_encriptado = document.getElementById("texto_encriptado")

    contenido_antes.style.display = 'none';
    contenido_despues.style.display = 'flex';

    let nuevotexto = texto;
    nuevotexto = nuevotexto.replace(/ai/g, "a");
    nuevotexto = nuevotexto.replace(/enter/g, "e");
    nuevotexto = nuevotexto.replace(/imes/g, "i");
    nuevotexto = nuevotexto.replace(/ober/g, "o");
    nuevotexto = nuevotexto.replace(/ufat/g, "u");

    texto_encriptado.innerHTML = nuevotexto 
    document.getElementById("texto").value = "";
}

function copiar() {
    const texto_encriptado = document.getElementById("texto_encriptado").innerHTML;
    navigator.clipboard.writeText(texto_encriptado);
}
