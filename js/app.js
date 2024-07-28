function validarTexto(texto) {
    // Verifica que el texto solo contenga letras minúsculas
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function encriptar() {
    // Obtén el valor del textarea
    const texto = document.getElementById('texto').value;

    // Verifica si el campo está vacío
    if (texto === "") {
        document.getElementById('mensaje-titulo').innerText = 'Error';
        document.getElementById('mensaje-contenido').innerText = 'El campo no puede estar vacío. Por favor, ingresa algún texto.';
        document.getElementById('btn-copiar').style.display = 'none'; // Oculta el botón de copiar
        return;
    }

    // Valida el texto
    if (!validarTexto(texto)) {
        document.getElementById('mensaje-titulo').innerText = 'Error';
        document.getElementById('mensaje-contenido').innerText = 'El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.';
        document.getElementById('btn-copiar').style.display = 'none'; // Oculta el botón de copiar
        return;
    }

    // Define las reglas de encriptación
    const reglas = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Realiza la encriptación
    let textoEncriptado = texto;
    for (let letra in reglas) {
        let regex = new RegExp(letra, 'g');
        textoEncriptado = textoEncriptado.replace(regex, reglas[letra]);
    }

    // Muestra el texto encriptado en el div derecho
    document.getElementById('mensaje-titulo').innerText = 'Texto encriptado';
    document.getElementById('mensaje-contenido').innerText = textoEncriptado;
    document.getElementById('texto').value = '';

    // Muestra el botón de copiar
    document.getElementById('btn-copiar').style.display = 'block';
}

function desencriptar() {
    // Obtén el valor del textarea
    const textoEncriptado = document.getElementById('texto').value;

    // Define las reglas de desencriptación
    const reglas = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    if (textoEncriptado === "") {
        document.getElementById('mensaje-titulo').innerText = 'Error';
        document.getElementById('mensaje-contenido').innerText = 'El campo no puede estar vacío. Por favor, ingresa algún texto.';
        document.getElementById('btn-copiar').style.display = 'none'; // Oculta el botón de copiar
        return;
    }

    // Realiza la desencriptación
    let textoDesencriptado = textoEncriptado;
    for (let clave in reglas) {
        let regex = new RegExp(clave, 'g');
        textoDesencriptado = textoDesencriptado.replace(regex, reglas[clave]);
    }

    // Muestra el texto desencriptado
    document.getElementById('mensaje-titulo').innerText = 'Texto desencriptado';
    document.getElementById('mensaje-contenido').innerText = textoDesencriptado;
    document.getElementById('texto').value = '';

    // Oculta el botón de copiar
    document.getElementById('btn-copiar').style.display = 'none';
}

function copiarTexto() {
    // Obtén el texto encriptado
    const textoParaCopiar = document.getElementById('mensaje-contenido').innerText;

    // Crea un elemento de texto temporal para copiar el texto
    const textareaTemporal = document.createElement('textarea');
    textareaTemporal.value = textoParaCopiar;
    document.body.appendChild(textareaTemporal);

    // Selecciona el texto y cópialo
    textareaTemporal.select();
    document.execCommand('copy');

    // Elimina el elemento de texto temporal
    document.body.removeChild(textareaTemporal);

    // Opcional: muestra un mensaje de éxito
    alert('Texto copiado al portapapeles');
}



