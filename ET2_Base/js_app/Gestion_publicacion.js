class Gestion_publicacion extends GestionEntidad {

    static resetearFormPublicacion() {

        GestionEntidad.resetearForm();
    }


    static async createForm_ADD() {


        this.recargarform();

        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_ADD_publicacion";

        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit();');

        document.getElementById('id_id_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_id_publicacion()');

        //document.getElementById('id_titulo_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_titulo_publicacion()');

        document.getElementById('id_autor_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_autor_publicacion()');

        document.getElementById('id_fecha_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_fecha_publicacion()');

        document.getElementById('id_area_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_area_publicacion()');

        document.getElementById('id_texto_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_texto_publicacion()');

        document.getElementById('id_imagen_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_imagen_publicacion()');


        let botonadd = document.createElement('button');
        botonadd.type = 'submit';
        let imgadd = document.createElement('img');
        imgadd.src = './iconos/ADD.png';
        botonadd.append(imgadd);
        document.getElementById('IU_form').append(botonadd);

        setLang();

        document.getElementById('div_IU_form').style.display = 'block';

    }


    static async createForm_EDIT(id_publicacion, titulo_publicacion, autor_publicacion, fecha_publicacion, area_publicacion, texto_publicacion,
        imagen_publicacion) {

        this.recargarform();

        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_EDIT_publicacion";

        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.EDIT();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit();');

        document.getElementById('id_id_publicacion').setAttribute('onblur', 'return Gestion_programa.comprobar_id_publicacion()');
        document.getElementById('id_id_publicacion').value = id_publicacion;
        document.getElementById('id_id_publicacion').setAttribute("readonly", "");

        document.getElementById('id_titulo_publicacion').setAttribute('onblur', 'return Gestion_programa.comprobar_titulo_publicacion()');
        document.getElementById('id_titulo_publicacion').value = titulo_publicacion;

        document.getElementById('id_autor_publicacion').setAttribute('onblur', 'return Gestion_programa.comprobar_autor_publicacion()');
        document.getElementById('id_autor_publicacion').value = autor_publicacion;

        document.getElementById('id_fecha_publicacion').setAttribute('onblur', 'return Gestion_programa.comprobar_fecha_publicacion()');
        document.getElementById('id_fecha_publicacion').value = fecha_publicacion;

        document.getElementById('id_area_publicacion').setAttribute('onblur', 'return Gestion_programa.comprobar_area_publicacion()');
        document.getElementById('id_area_publicacion').value = area_publicacion;

        document.getElementById('id_texto_publicacion').setAttribute('onblur', 'return Gestion_programa.comprobar_texto_publicacion()');
        document.getElementById('id_texto_publicacion').value = texto_publicacion;

        document.getElementById('id_imagen_publicacion').setAttribute('onblur', 'return Gestion_programa.comprobar_imagen_publicacion()');
        document.getElementById('id_imagen_publicacion').value = imagen_publicacion;

        let botonedit = document.createElement('button');
        botonedit.type = 'submit';
        let imgedit = document.createElement('img');
        imgedit.src = './iconos/EDIT.png';
        botonedit.append(imgedit);
        document.getElementById('IU_form').append(botonedit);

        // para actualizar idioma despues de incluir la imagen
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }


    static async createForm_DELETE(id_publicacion, titulo_publicacion, autor_publicacion, fecha_publicacion, area_publicacion, texto_publicacion,
        imagen_publicacion) {

        // resetear el formulario
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_DELETE_publicacion";

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.DELETE();';

        // se coloca el onblur del dni y se pone a vacio el valor 
        document.getElementById('id_id_publicacion').value = id_publicacion;
        document.getElementById('id_id_publicacion').setAttribute("readonly", "");
        // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('id_titulo_publicacion').value = titulo_publicacion;
        document.getElementById('id_titulo_publicacion').setAttribute("readonly", "");

        document.getElementById('id_autor_publicacion').value = autor_publicacion;
        document.getElementById('id_autor_publicacion').setAttribute("readonly", "");

        document.getElementById('id_fecha_publicacion').value = fecha_publicacion;
        document.getElementById('id_fecha_publicacion').setAttribute("readonly", "");

        document.getElementById('id_area_publicacion').value = area_publicacion;
        document.getElementById('id_area_publicacion').setAttribute("readonly", "");

        document.getElementById('id_texto_publicacion').value = texto_publicacion;
        document.getElementById('id_texto_publicacion').setAttribute("readonly", "");

        document.getElementById('id_imagen_publicacion').value = imagen_publicacion;
        document.getElementById('id_imagen_publicacion').setAttribute("readonly", "");

        let botondelete = document.createElement('button');
        botondelete.id = 'botondelete';
        botondelete.type = 'submit';
        let imgdelete = document.createElement('img');
        imgdelete.src = './iconos/DELETE.png';
        botondelete.append(imgdelete);
        document.getElementById('IU_form').append(botondelete);

        // para actualizar idioma 
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }
    

    static async createForm_SHOWCURRENT(id_publicacion, titulo_publicacion, autor_publicacion, fecha_publicacion, area_publicacion, texto_publicacion,
        imagen_publicacion) {
    
        // reutilizo la creación del delete porque me implica pocas modificaciones
        this.createForm_DELETE(id_publicacion, titulo_publicacion, autor_publicacion, fecha_publicacion, area_publicacion, texto_publicacion,
            imagen_publicacion);
    
        // rellenar titulo del formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SHOWCURRENT_publicacion";
    
        // eliminar boton delete del form DELETE
        document.getElementById('botondelete').remove();
    
        // se rellena el action del formulario
        let imgshowcurrent = document.createElement('img');
        imgshowcurrent.src = './iconos/SHOWCURRENT.png';
        imgshowcurrent.setAttribute("onclick", "DOM_class.cerrar_div_formulario();")
        document.getElementById('IU_form').append(imgshowcurrent);
    
        // para actualizar el idioma
        setLang();
    
    }





    static async createForm_SEARCH() {

        // resetear el formulario
        this.recargarform();
    
        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SEARCH_publicacion";
    
        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.SEARCH();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit_SEARCH();');
    
        // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetear formusuario
        document.getElementById('id_id_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_id_publicacion_SEARCH()');
    
        //document.getElementById('id_titulo_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_titulo_publicacion_SEARCH()');

        document.getElementById('id_autor_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_autor_publicacion_SEARCH()');    
        
        document.getElementById('id_fecha_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_fecha_publicacion_SEARCH()');    
        
        document.getElementById('id_area_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_area_publicacion_SEARCH()');    
        
        document.getElementById('id_texto_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_texto_publicacion_SEARCH()');    
        
        document.getElementById('id_imagen_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_imagen_publicacion_SEARCH()');        
        
        let botonsearch = document.createElement('button');
        botonsearch.type = 'submit';
        let imgsearch = document.createElement('img');
        imgsearch.src = './iconos/SEARCH.png';
        botonsearch.append(imgsearch);
        document.getElementById('IU_form').append(botonsearch);
    
        // para actualizar idioma
        setLang();
    
        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    
    }



    static async ADD() {
        await this.peticionBackGeneral('IU_form', 'publicacion', 'ADD')
            .then((respuesta) => {
                if (respuesta['ok']) {
                    this.resetearFormPublicacion();
                    this.SEARCH();
                }
                else {
                    DOM_class.mostrardivmensajes(respuesta['code']);
                }
            });
    }

    static async EDIT() {
        await this.peticionBackGeneral('IU_form', 'publicacion', 'EDIT')
            .then((respuesta) => {
                if (respuesta['ok']) {
                    this.resetearFormPublicacion();
                    this.SEARCH();
                }
                else {
                    DOM_class.mostrardivmensajes(respuesta['code']);
                }
            });
    }

    static async DELETE() {
        await this.peticionBackGeneral('IU_form', 'publicacion', 'DELETE')
            .then((respuesta) => {
                if (respuesta['ok']) {
                    this.resetearFormPublicacion();
                    this.SEARCH();
                }
                else {
                    DOM_class.mostrardivmensajes(respuesta['code']);
                }
            });
    }

    static async SEARCH() {
        await this.peticionBackGeneral('IU_form', 'publicacion', 'SEARCH')
            .then((respuesta) => {
                this.resetearFormPublicacion();
                let publicacion = new Gestion_publicacion('publicacion', respuesta['resource'], Array('id_publicacion', 'titulo_publicacion', 'autor_publicacion')); publicacion.mostrartabla();
                if (respuesta['code'] == 'RECORDSET_VACIO') {
                    document.getElementById('muestradatostabla').innerHTML = 'no hay datos coincidentes con la busqueda';
                }
            });
    }

    static recargarform() {

        document.getElementById("IU_form").innerHTML = '';

        document.getElementById("IU_form").innerHTML = `
    
        
          <label for="id_id_publicacion" class="label_id_publicacion"></label>
          <input type="text" id="id_id_publicacion" name="id_publicacion" placeholder="">
          <div id="div_error_id_publicacion" class="errocampo"><a id="error_id_publicacion"></a></div>
    
          <label for="id_titulo_publicacion" class="label_titulo_publicacion"></label>
          <input type="text" id="id_titulo_programa" name="titulo_programa" placeholder="">
          <div id="div_error_titulo_publicacion" class="errocampo"><a id="error_titulo_publicacion"></a></div>
    
          <label for="id_autor_publicacion" class="label_autor_publicacion"></label>
          <input type="text" id="id_autor_publicacion" name="autor_publicacion" placeholder="">
          <div id="div_error_autor_publicacion" class="errocampo"><a id="error_autor_publicacion"></a></div>
    
          <label for="id_fecha_publicacion" class="label_fecha_publicacion"></label>
          <input type="text" id="id_fecha_publicacion" name="fecha_publicacion" placeholder="dd/mm/aaaa">
          <div id="div_error_fecha_publicacion" class="errocampo"><a id="error_fecha_publicacion"></a></div>
    
          <label for="id_area_publicacion" class="label_area_publicacion"></label>
          <input type="text" id="id_area_publicacion" name="area_publicacion" placeholder="">
          <div id="div_error_area_publicacion" class="errocampo"><a id="error_area_publicacion"></a></div>
    
          <label for="id_texto_publicacion" class="label_texto_publicacion"></label>
          <input type="text" id="id_texto_publicacion" name="texto_publicacion" placeholder="">
          <div id="div_error_texto_publicacion" class="errocampo"><a id="error_texto_publicacion"></a></div>
    
          <label for="id_imagen_publicacion" class="label_imagen_publicacion"></label>
          <input type="file" id="id_imagen_publicacion" name="imagen_publicacion">
          <div id="div_error_imagen_publicacion" class="errocampo"><a id="error_imagen_publicacion"></a></div>
    
          `;

        //obtener campos del formulario
        let campos = document.forms['IU_form'].elements;
        
        //recorrer todos los campos
        for (let i = 0; i < campos.length; i++) {
            if (eval(document.getElementById('div_error_' + campos[i].id))) {
                document.getElementById('div_error_' + campos[i].id).style.display = 'none';
            }
        }

        setLang();


    }



}