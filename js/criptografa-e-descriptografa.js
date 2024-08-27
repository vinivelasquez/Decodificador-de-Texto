var listaCriptografica = ["alpha", "echo", "india", "oscar", "uniform"];
var listaNormal = ["a", "e", "i", "o", "u"];

const cifrasParaCriptografar = {
    "a": "alpha",
    "e": "echo",
    "i": "india",
    "o": "oscar",
    "u": "uniform"
}

const cifrasParaDescriptografar = {
    "alpha": "a",
    "echo": "e",
    "india": "i",
    "oscar": "o",
    "uniform": "u"
}

function criptografaTexto(texto) {
    let textoConvertido = texto;
    listaNormal.forEach(function (letra) {
        textoConvertido = textoConvertido.replaceAll(letra, cifrasParaCriptografar[letra])
    })
    return textoConvertido;
}

function descriptografaTexto(texto) {
    let textoParaConverter = texto;
    listaCriptografica.forEach(function (letra) {
        textoParaConverter = textoParaConverter.replaceAll(letra, cifrasParaDescriptografar[letra])
    })
    return textoParaConverter;
}

