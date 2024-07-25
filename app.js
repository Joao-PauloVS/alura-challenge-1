function limpaTexto(){
    let texto = document.getElementById("texto");
    if (texto.value === "Digite seu texto"){
        texto.value = "";
    }
}

function criptografar(){
    let texto = document.getElementById("texto").value;
    let criptografado = texto.replace(/e/g, "enter")
                             .replace(/i/g, "imes")
                             .replace(/a/g, "ai")
                             .replace(/o/g, "ober")
                             .replace(/u/g, "ufat");
    
    
    document.getElementById("resultado-texto").innerText = criptografado;

    esconderAvisos();
    
    revelarResultado();
}

function descriptografar(){
    let texto = document.getElementById("texto").value;
    let descriptografado = texto.replace(/ai/g, "a")
                                .replace(/enter/g, "e")
                                .replace(/imes/g, "i")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");
    
    
    document.getElementById("resultado-texto").innerText = descriptografado;
    
    esconderAvisos();

    revelarResultado();
}

function copiar(){
    let textoCopiado = document.getElementById("resultado-texto").innerText;

    navigator.clipboard.writeText(textoCopiado);
}

function esconderAvisos(){
    document.getElementById("avisos").style.display = "none";
}

function revelarResultado(){
    document.getElementById("resultado-criptografado").style.display = "flex"; 
}
