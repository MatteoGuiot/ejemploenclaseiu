class validacionesatomicas{
    constructor(){

    }

    static size_minimo(id, valorminimo){
        if (document.getElementById(id).value.length < valorminimo){
            return false;
        }
        else{
            return true;
        }
    }

    static size_maximo(id, valormaximo){
        if (document.getElementById(id).value.length > valormaximo){
            return false;
        }
        else{
            return true;
        }
    }

    static soloAlfabetico(id){
        
        const pattern = /^[a-zA-Z]+$/;
        
        if(!pattern.test(document.getElementById(id).value)){
            return false;
        }
        else{
            return true;
        }
    }

    static digitos(id){
        
        const pattern = /^[1-9]+$/;

        if(!pattern.test(document.getElementById(id).value)){
            return false;
        }
        else{
            return true;
        }
    }

    static alfabeticoAcentosÑyEspacios(id){

        const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/;
        
        if(!pattern.test(document.getElementById(id).value)){
            return false;
        }
        else{
            return true;
        }
    }

    static alfabeticoÑ(id){

        const pattern = /^[a-zA-ZñÑ]+$/;
        
        if(!pattern.test(document.getElementById(id).value)){
            return false;
        }
        else{
            return true;
        }
    }

    static alfabeticoAcentosÑyEspaciosPuntuacion(id){

        const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s.,;:!?¡¿-]+$/;
        
        if(!pattern.test(document.getElementById(id).value)){
            return false;
        }
        else{
            return true;
        }
    }

    static alfabeticoAcentosÑyEspaciosPuntuacionRetornoCarro(id){

        const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s.,;:!?¡-¿\n\r]+$/;
        
        if(!pattern.test(document.getElementById(id).value)){
            return false;
        }
        else{
            return true;
        }
    }

    static soloAlfabeticoYPuntEsp(id){
        
        const pattern = /^[a-zA-Z:/.]*$/;
        
        if(!pattern.test(document.getElementById(id).value)){
            return false;
        }
        else{
            return true;
        }
    }

    static ascii(id){

        cadena = document.getElementById(id).value;

        for (var i = 0; i< cadena.length; i++){
            var charCode = cadena.charCodeAt(i);
            
            if(charCode <0 || charCode > 127){
                return false;
            }
        }
        return true;
    }
}