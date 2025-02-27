class validacionesatomicas {
    constructor() {

    }

    static size_minimo(id, valorminimo) {
        if (document.getElementById(id).value.length < valorminimo) {
            return false;
        }
        else {
            return true;
        }
    }

    static size_maximo(id, valormaximo) {
        if (document.getElementById(id).value.length >= valormaximo + 1) {
            return false;
        }
        else {
            return true;
        }
    }

    static soloAlfabetico(id) {

        const pattern = /^[a-zA-Z]+$/;

        if (document.getElementById(id).value != '') {
            if (!pattern.test(document.getElementById(id).value)) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    }

    static digitos(id) {

        const pattern = /^[0-9]+$/;

        if (document.getElementById(id).value != '') {
            if (!pattern.test(document.getElementById(id).value)) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    }

    static digitosFecha(id) {

        const pattern = /^\d{4}-\d{2}-\d{2}$/;

        if (document.getElementById(id).value != '') {
            if (!pattern.test(document.getElementById(id).value)) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    }


    static alfabeticoAcentosÑyEspacios(id) {

        const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/;

        if (document.getElementById(id).value != '') {
            if (!pattern.test(document.getElementById(id).value)) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    }

    static alfabeticoÑ(id) {

        const pattern = /^[a-zA-ZñÑ]+$/;

        if (document.getElementById(id).value != '') {
            if (!pattern.test(document.getElementById(id).value)) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    }

    static alfabeticoAcentosÑyEspaciosPuntuacion(id) {

        const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s.,;:!?¡¿-]+$/;

        if (document.getElementById(id).value != '') {
            if (!pattern.test(document.getElementById(id).value)) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    }

    static alfabeticoAcentosÑyEspaciosPuntuacionRetornoCarro(id) {

        const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s.,;:!?¡-¿\n\r]+$/;

        if (document.getElementById(id).value != '') {
            if (!pattern.test(document.getElementById(id).value)) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    }

    static soloAlfabeticoYPuntEsp(id) {

        const pattern = /^[a-zA-Z:/.]*$/;

        if (document.getElementById(id).value != '') {
            if (!pattern.test(document.getElementById(id).value)) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    }

    static ascii(id) {

        if (document.getElementById(id).value != '') {
            for (var i = 0; i < document.getElementById(id).value.length; i++) {
                var charCode = document.getElementById(id).value.charCodeAt(i);

                if (charCode < 0 || charCode > 127) {
                    return false;
                }
            }
            return true;
        }
        else {
            return true;
        }
    }


    static validarFileVacio(file) {

        if (!file) {
            return false;
        }
        else {
            return true;
        }
    }


    static validarFileTam(file) {

        const maxSize = 2000000;
        if (file.size > maxSize) {
            return false;
        }
        else {
            return true;
        }
    }


    static validarFileFormato(file) {
        const extension = file.name.split('.').pop().toLowerCase();

        const extensionesPermitidas = ['pdf', 'doc', 'docx'];
        if (!extensionesPermitidas.includes(extension)) {
            return false;
        }
        else {
            return true;
        }
    }

    static validarImagenVacio(img) {

        if (!img) {
            return false;
        }
        else {
            return true;
        }
    }

    static validarImagenTam(img) {

        const maxSize = 20000;
        if (img.size > maxSize) {
            return false;
        }
        else {
            return true;
        }
    }


    static validarImagenFormato(img) {
        const extension = img.name.split('.').pop().toLowerCase();

        const extensionesPermitidas = ['jpg', 'jpeg'];
        if (!extensionesPermitidas.includes(extension)) {
            return false;
        }
        else {
            return true;
        }
    }

}