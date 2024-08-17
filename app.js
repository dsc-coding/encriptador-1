let textoNuevo='';
let textoEncriptado='';
let textoCopiado='';
let textoNoEncriptado='';

function leerTexto(element){
textoNuevo=document.getElementById(element).value;

}

function encriptar(){
    leerTexto('textoUsuario');
    if (textoNuevo==='') {
    
    }else{
       codificar(textoNuevo);
        quitarElemento('notexto');
        quitarElemento('imagena');
        mostrarElemento('resultado');
        mostrarElemento('copiar');
        asignarTextoElemeto('resultado',textoEncriptado);
        condicionesIniciales();
    }
}

function desencriptar(){
    leerTexto('textoUsuario');

    if (textoNuevo==='') {
    
    }else{
        decodificar(textoNuevo);
        asignarTextoElemeto('resultado',textoNoEncriptado);
        condicionesIniciales();
    }
}

function condicionesIniciales(){
    textoNuevo='';
    textoEncriptado='';
    textoCopiado='';
    textoNoEncriptado='';
    document.getElementById('resultado').classList.remove('resaltado');
}

function codificar(texto){
    for (let index = 0; index < texto.length; index++) {
        if (texto[index]==='a') {
            textoEncriptado+='ai'; 
        } else{
            if(texto[index]==='e') {
                textoEncriptado+='enter';
            } else{
                if (texto[index]==='i') {
                    textoEncriptado+='imes';
                } else{
                    if (texto[index]==='o') {
                        textoEncriptado+='ober';
                    } else{
                        if (texto[index]==='u') {
                            textoEncriptado+='ufat';
                        } else{
                            textoEncriptado+=texto[index];
                             }
                         }
                     }
                 }    
            
             }
    }
    
}

function decodificar(texto){
    
    for (let index = 0; index < texto.length; index++) {
        if (texto[index]==='a') {
            textoNoEncriptado+='a';
            index+=1; 
        } else{
            if(texto[index]==='e') {
                textoNoEncriptado+='e';
                index+=4;
            } else{
                if (texto[index]==='i') {
                    textoNoEncriptado+='i';
                    index+=3;
                } else{
                    if (texto[index]==='o') {
                        textoNoEncriptado+='o';
                        index+=3;
                    } else{
                        if (texto[index]==='u') {
                            textoNoEncriptado+='u';
                            index+=3;
                        } else{
                            textoNoEncriptado+=texto[index];
                             }
                         }
                     }
                 }    
            
             }
    }
    
}

function quitarElemento(elemento){
    document.getElementById(elemento).style.display='none';
}

function mostrarElemento(elemento){
    document.getElementById(elemento).style.display='block';
}

function asignarTextoElemeto(elemento,texto){
    document.getElementById(elemento).innerHTML=texto;
}

function copiarTexto(){
    let texto=document.getElementById('resultado').textContent;
    document.getElementById('resultado').classList.add('resaltado');
    navigator.clipboard.writeText(texto);
}