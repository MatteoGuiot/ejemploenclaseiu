class Gestion_publicacion extends GestionEntidad {

  static resetearFormPublicacion() {

    GestionEntidad.resetearForm();
  }


  static async createForm_ADD() {


    this.recargarform();

    document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_ADD_publicacion";

    document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.ADD();';
    document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit();');

    document.getElementById('id_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_id_publicacion()');

    document.getElementById('titulo_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_titulo_publicacion()');

    document.getElementById('autor_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_autor_publicacion()');

    document.getElementById('fecha_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_fecha_publicacion()');

    document.getElementById('area_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_area_publicacion()');

    document.getElementById('texto_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_texto_publicacion()');

    document.getElementById('nueva_imagen_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_nueva_imagen_publicacion()');
    document.getElementById('label_imagen_publicacion').style.display = 'none';
    document.getElementById('imagen_publicacion').style.display = 'none';
    document.getElementById('link_imagen_publicacion').style.display = 'none';


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

    document.getElementById('id_publicacion').setAttribute('onblur', 'return Gestion_programa.comprobar_id_publicacion()');
    document.getElementById('id_publicacion').value = id_publicacion;
    document.getElementById('id_publicacion').setAttribute("readonly", "");

    document.getElementById('titulo_publicacion').setAttribute('onblur', 'return Gestion_programa.comprobar_titulo_publicacion()');
    document.getElementById('titulo_publicacion').value = titulo_publicacion;

    document.getElementById('autor_publicacion').setAttribute('onblur', 'return Gestion_programa.comprobar_autor_publicacion()');
    document.getElementById('autor_publicacion').value = autor_publicacion;

    document.getElementById('fecha_publicacion').setAttribute('onblur', 'return Gestion_programa.comprobar_fecha_publicacion()');
    document.getElementById('fecha_publicacion').value = fecha_publicacion;

    document.getElementById('area_publicacion').setAttribute('onblur', 'return Gestion_programa.comprobar_area_publicacion()');
    document.getElementById('area_publicacion').value = area_publicacion;

    document.getElementById('texto_publicacion').setAttribute('onblur', 'return Gestion_programa.comprobar_texto_publicacion()');
    document.getElementById('texto_publicacion').value = texto_publicacion;

    document.getElementById('imagen_publicacion').value = imagen_publicacion;
    document.getElementById('link_imagen_publicacion').setAttribute('href', 'http://193.147.87.202/ET2/filesuploaded/files_xxxx/' + imagen_publicacion);
    document.getElementById('imagen_publicacion').setAttribute("readonly", true);

    document.getElementById('nueva_imagen_publicacion').setAttribute('onblur', 'return Gestion_programa.comprobar_nueva_imagen_publicacion()');

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
    document.getElementById('id_publicacion').value = id_publicacion;
    document.getElementById('id_publicacion').setAttribute("readonly", "");
    // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
    document.getElementById('titulo_publicacion').value = titulo_publicacion;
    document.getElementById('titulo_publicacion').setAttribute("readonly", "");

    document.getElementById('autor_publicacion').value = autor_publicacion;
    document.getElementById('autor_publicacion').setAttribute("readonly", "");

    document.getElementById('fecha_publicacion').value = fecha_publicacion;
    document.getElementById('fecha_publicacion').setAttribute("readonly", "");

    document.getElementById('area_publicacion').value = area_publicacion;
    document.getElementById('area_publicacion').setAttribute("readonly", "");

    document.getElementById('texto_publicacion').value = texto_publicacion;
    document.getElementById('texto_publicacion').setAttribute("readonly", "");

    document.getElementById('imagen_publicacion').value = imagen_publicacion;
    document.getElementById('imagen_publicacion').href += imagen_publicacion;
    document.getElementById('imagen_publicacion').setAttribute("readonly", true);

    document.getElementById('label_nueva_imagen_publicacion').style.display = "none";
    document.getElementById('nueva_imagen_publicacion').style.display = "none";

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

    document.getElementById('label_nueva_imagen_publicacion').style.display = "none";
    document.getElementById('nueva_imagen_publicacion').style.display = "none";

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
    document.getElementById('id_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_id_publicacion_SEARCH()');

    document.getElementById('titulo_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_titulo_publicacion_SEARCH()');

    document.getElementById('autor_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_autor_publicacion_SEARCH()');

    document.getElementById('fecha_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_fecha_publicacion_SEARCH()');

    document.getElementById('area_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_area_publicacion_SEARCH()');

    document.getElementById('texto_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_texto_publicacion_SEARCH()');

    document.getElementById('imagen_publicacion').setAttribute('onblur', 'return Gestion_publicacion.comprobar_imagen_publicacion_SEARCH()');

    document.getElementById("label_nueva_imagen_publicacion").style.display = 'none';
    document.getElementById("nueva_imagen_publicacion").style.display = 'none';
    document.getElementById('link_imagen_publicacion').style.display = 'none';


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

  static comprobar_submit() {

    let valor = this.comprobar_id_publicacion();
    let valor1 = this.comprobar_titulo_publicacion();
    let valor2 = this.comprobar_autor_publicacion();
    let valor3 = this.comprobar_fecha_publicacion();
    let valor4 = this.comprobar_area_publicacion();
    let valor5 = this.comprobar_texto_publicacion();
    let valor6 = this.comprobar_nueva_imagen_publicacion()


    let resultado = (
      valor &&
      valor1 &&
      valor2 &&
      valor3 &&
      valor4 &&
      valor5 &&
      valor6
    );

    return resultado;


  }


  static comprobar_submit_SEARCH() {

    let valor = this.comprobar_id_publicacion_SEARCH();
    let valor1 = this.comprobar_titulo_publicacion_SEARCH();
    let valor2 = this.comprobar_autor_publicacion_SEARCH();
    let valor3 = this.comprobar_fecha_publicacion_SEARCH();
    let valor4 = this.comprobar_area_publicacion_SEARCH();
    let valor5 = this.comprobar_texto_publicacion_SEARCH();
    let valor6 = this.comprobar_imagen_publicacion_SEARCH();



    let resultado = (
      valor &&
      valor1 &&
      valor2 &&
      valor3 &&
      valor4 &&
      valor5 &&
      valor6
    );

    return resultado;


  }



  static comprobar_id_publicacion() {

    if (validacionesatomicas.digitos('id_publicacion')) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('id_publicacion', 'KO_formato_id_publicacion');
      return false;
    }

    if (validacionesatomicas.size_minimo('id_publicacion', 1)) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('id_publicacion', 'KO_id_publicacion_tam_min');
      return false;
    }

    if (validacionesatomicas.size_maximo('id_publicacion', 6)) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('id_publicacion', 'KO_id_publicacion_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_publicacion');
    return true;
  }

  static comprobar_titulo_publicacion() {

    if (validacionesatomicas.alfabeticoAcentosÑyEspacios('titulo_publicacion')) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion', 'KO_formato_titulo_publicacion');
      return false;
    }

    if (validacionesatomicas.size_minimo('titulo_publicacion', 6)) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion', 'KO_titulo_publicacion_tam_min');
      return false;
    }

    if (validacionesatomicas.size_maximo('titulo_publicacion', 80)) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion', 'KO_titulo_publicacion_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('titulo_publicacion');
    return true;

  }

  static comprobar_autor_publicacion() {

    if (validacionesatomicas.alfabeticoAcentosÑyEspacios('autor_publicacion')) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('autor_publicacion', 'KO_formato_autor_publicacion');
      return false;
    }

    if (validacionesatomicas.size_minimo('autor_publicacion', 6)) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('autor_publicacion', 'KO_autor_publicacion_tam_min');
      return false;
    }

    if (validacionesatomicas.size_maximo('autor_publicacion', 40)) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('autor_publicacion', 'KO_autor_publicacion_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('autor_publicacion');
    return true;
  }

  static comprobar_fecha_publicacion() {
    //#########################################revisar a ver si hay fallos#################################################################
    if (validacionesatomicas.digitosFecha('fecha_publicacion')) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('fecha_publicacion', 'KO_formato_fecha_publicacion');
      return false;
    }
    if(document.getElementById('fecha_publicacion').value == 0){
      DOM_class.mostrardivmensajeserrordebajo('fecha_publicacion', 'KO_fecha_publicacion_null');
      return false;
    }

    DOM_class.mostrarexitovalor('fecha_publicacion');
    return true;
  }

  static comprobar_area_publicacion() {

    if (validacionesatomicas.digitos('area_publicacion')) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('area_publicacion', 'KO_formato_area_publicacion');
      return false;
    }

    if (validacionesatomicas.size_minimo('area_publicacion', 1)) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('area_publicacion', 'KO_area_publicacion_tam_min');
      return false;
    }

    if (validacionesatomicas.size_maximo('area_publicacion', 6)) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('area_publicacion', 'KO_area_publicacion_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('area_publicacion');
    return true;
  }

  static comprobar_texto_publicacion() {

    if (validacionesatomicas.ascii('texto_publicacion')) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('texto_publicacion', 'KO_formato_texto_publicacion');
      return false;
    }

    if (validacionesatomicas.size_minimo('texto_publicacion', 30)) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('texto_publicacion', 'KO_texto_publicacion_tam_min');
      return false;
    }

    if (validacionesatomicas.size_maximo('texto_publicacion', 8000)) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('texto_publicacion', 'KO_texto_publicacion_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('texto_publicacion');
    return true;
  }

  static comprobar_nueva_imagen_publicacion() {

    const imagen = document.getElementById('nueva_imagen_publicacion').files[0];

    if(validacionesatomicas.validarImagenVacio(imagen)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('nueva_imagen_publicacion', 'KO_nueva_imagen_publicacion_tam_min');
      return false;
    }

    if (validacionesatomicas.validarImagenTam(imagen)) {   
    }
    else {
        DOM_class.mostrardivmensajeserrordebajo('nueva_imagen_publicacion', 'KO_nueva_imagen_publicacion_tam_max');
        return false;
    }
    
    if(validacionesatomicas.validarImagenFormato(imagen)){
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('nueva_imagen_publicacion', 'KO_fromato_nueva_imagen_publicacion');
      return false;
    }

    DOM_class.mostrarexitovalor('nueva_imagen_publicacion');
    return true;
  }

  static comprobar_id_publicacion_SEARCH() {

    if (validacionesatomicas.alfabeticoAcentosÑyEspacios('titulo_publicacio')) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('titulo_publicacio', 'KO_formato_titulo_publicacio');
      return false;
    }

    if (validacionesatomicas.size_maximo('titulo_publicacio', 80)) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('titulo_publicacio', 'KO_titulo_publicacio_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('titulo_publicacio');
    return true;
  }

  static comprobar_titulo_publicacion_SEARCH() {

    if (validacionesatomicas.alfabeticoAcentosÑyEspacios('titulo_publicacio')) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('titulo_publicacio', 'KO_formato_titulo_publicacio');
      return false;
    }

    if (validacionesatomicas.size_maximo('titulo_publicacio', 80)) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('titulo_publicacio', 'KO_titulo_publicacio_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('titulo_publicacio');
    return true;
  }

  static comprobar_autor_publicacion_SEARCH() {

    if (validacionesatomicas.alfabeticoAcentosÑyEspacios('autor_publicacion')) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('autor_publicacion', 'KO_formato_autor_publicacion');
      return false;
    }

    if (validacionesatomicas.size_maximo('autor_publicacion', 40)) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('autor_publicacion', 'KO_autor_publicacion_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('autor_publicacion');
    return true;
  }

  static comprobar_fecha_publicacion_SEARCH() {
    return true;
  }

  static comprobar_area_publicacion_SEARCH() {

    if (validacionesatomicas.digitos('area_publicacion')) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('area_publicacion', 'KO_formato_area_publicacion');
      return false;
    }

    if (validacionesatomicas.size_maximo('area_publicacion', 6)) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('area_publicacion', 'KO_area_publicacion_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('area_publicacion');
    return true;
  }

  static comprobar_texto_publicacion_SEARCH() {

    if (validacionesatomicas.ascii('texto_publicacion')) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('texto_publicacion', 'KO_formato_texto_publicacion');
      return false;
    }

    if (validacionesatomicas.size_maximo('texto_publicacion', 8000)) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('texto_publicacion', 'KO_texto_publicacion_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('texto_publicacion');
    return true;
  }

  static comprobar_imagen_publicacion_SEARCH() {
    
    if (validacionesatomicas.soloAlfabetico('imagen_publicacion')) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion', 'KO_formato_imagen_publicacion');
      return false;
    }

    if (validacionesatomicas.size_maximo('imagen_publicacion', 50)) {
    }
    else {
      DOM_class.mostrardivmensajeserrordebajo('imagen_publicacion', 'KO_imagen_publicacion_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('imagen_publicacion');
    return true;
  }



  static async ADD() {
    await this.peticionBackGeneral('IU_form', 'publicacion', 'ADD')
      .then((respuesta) => {
        if (respuesta['ok']) {
          this.recargarform();
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
          this.recargarform();
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
          this.recargarform();
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
        this.recargarform();
        let publicacion = new Gestion_publicacion('publicacion', respuesta['resource'], Array('id_publicacion', 'titulo_publicacion', 'autor_publicacion')); publicacion.mostrartabla();
        if (respuesta['code'] == 'RECORDSET_VACIO') {
          document.getElementById('muestradatostabla').innerHTML = 'no hay datos coincidentes con la busqueda';
        }
      });
  }

  static recargarform() {

    document.getElementById("IU_form").innerHTML = '';

    document.getElementById("IU_form").innerHTML = `
    
        
            <label for="id_publicacion" class="label_id_publicacion"></label>
            <input type="text" id="id_publicacion" name="id_publicacion" placeholder="">
            <div id="div_error_id_publicacion" class="errocampo"><a id="error_id_publicacion"></a></div>
            <br>
            <label for="titulo_publicacion" class="label_titulo_publicacion"></label>
            <input type="text" id="titulo_publicacion" name="titulo_publicacion" placeholder="">
            <div id="div_error_titulo_publicacion" class="errocampo"><a id="error_titulo_publicacion"></a></div>
            <br>
            <label for="autor_publicacion" class="label_autor_publicacion"></label>
            <input type="text" id="autor_publicacion" name="autor_publicacion" placeholder="">
            <div id="div_error_autor_publicacion" class="errocampo"><a id="error_autor_publicacion"></a></div>
            <br>
            <label for="fecha_publicacion" class="label_fecha_publicacion"></label>
            <input type="date" id="fecha_publicacion" name="fecha_publicacion" placeholder="dd/mm/aaaa">
            <div id="div_error_fecha_publicacion" class="errocampo"><a id="error_fecha_publicacion"></a></div>
            <br>
            <label for="area_publicacion" class="label_area_publicacion"></label>
            <input type="text" id="area_publicacion" name="area_publicacion" placeholder="">
            <div id="div_error_area_publicacion" class="errocampo"><a id="error_area_publicacion"></a></div>
            <br>
            <label for="texto_publicacion" class="label_texto_publicacion"></label>
            <input type="text" id="texto_publicacion" name="texto_publicacion" placeholder="">
            <div id="div_error_texto_publicacion" class="errocampo"><a id="error_texto_publicacion"></a></div>
            <br>
            <label id="label_imagen_publicacion" for="imagen_publicacion" class="label_imagen_publicacion"></label>
            <input type="text" id="imagen_publicacion" name="imagen_publicacion">
            <a id="link_imagen_publicacion" href=""><img src="./iconos/FILE.png" /></a> <br>
            <label id="label_nueva_imagen_publicacion" for="nueva_imagen_publicacion" class="label_nueva_imagen_publicacion"></label>
            <input type="file" id="nueva_imagen_publicacion" name="nueva_imagen_publicacion">
            <div id="div_error_modo_aplicacion_publicacion" class="errocampo"><a id="error_modo_aplicacion_publicacion"></a></div>
            <br>
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