function limpaTexto(){
    let texto = document.getElementById("texto");
    if (texto.value === "Digite seu texto"){
        texto.value = "";
    }
}

function criptografar(){
    let texto = document.getElementById("texto").value;
    let criptografado = texto.replace(/u/g, "ufat")
                             .replace(/o/g, "ober")
                             .replace(/i/g, "imes")
                             .replace(/e/g, "enter")
                             .replace(/a/g, "ai");
    
    
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
    let textoCopiado = document.getElementById("resultado-texto");

    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function esconderAvisos(){
    document.getElementById("avisos").style.display = "none";
}

function revelarResultado(){
    document.getElementById("resultado-criptografado").style.display = "flex"; 
}

function mudaCor(){
    let retangulo = document.getElementById("apresentacao-resultado");
    retangulo.style.backgroundColor = 'var(--cor-2)';
}