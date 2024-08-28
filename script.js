const textArea = document.querySelector(".encriptar-area-texto");
const mensaje = document.querySelector(".desencriptar-area-texto");

function encriptar(stringParaEncriptar) {
    let llaves = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for (let i=0; i<llaves.length; i++){
        if (stringParaEncriptar.includes(llaves[i][0])) {
            stringParaEncriptar = stringParaEncriptar.replaceAll(llaves[i][0], llaves[i][1]);
        }
    }
    return stringParaEncriptar
}

function accionEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    const regex = /^[a-z\s]+$/;
    if (regex.test(textoEncriptado)) {
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    } else {
        alert("Texto inválido: sólo se permiten letras minúsculas");
    }
    
}

function desencriptar(stringParaDesencriptar) {
    let llaves = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringParaDesencriptar = stringParaDesencriptar.toLowerCase();
    for (let i=0; i<llaves.length; i++){
        if (stringParaDesencriptar.includes(llaves[i][1])) {
            stringParaDesencriptar = stringParaDesencriptar.replaceAll(llaves[i][1], llaves[i][0]);
        }
    }
    return stringParaDesencriptar
}

function accionDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function copiarTexto() {
    let textoParaCopiar = mensaje;
    textoParaCopiar.select();
    textoParaCopiar.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoParaCopiar.value);
}

function borrarTexto() {
    textArea.value = "";
}

async function pegarTexto() {
    if (navigator.clipboard && navigator.clipboard.readText) {
        const text = await navigator.clipboard.readText();
        textArea.value = text;
    } else {
        console.warn('La API de portapapeles no es compatible con este navegador.');
    }
}