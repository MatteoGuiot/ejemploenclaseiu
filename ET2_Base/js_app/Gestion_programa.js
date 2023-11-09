class Gestion_programa extends GestionEntidad {

  static resetearFormPrograma() {

    GestionEntidad.resetearForm();
  }

  static async createForm_ADD() {

    this.recargarform();

    document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_ADD_programa";

    document.getElementById('IU_form').action = 'javascript:Gestion_programa.ADD();';
    document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit();');

    document.getElementById('id_id_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_id_programa()');

    document.getElementById('id_nombre_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_nombre_programa()');

    document.getElementById('id_acronimo_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_acronimo_programa()');

    document.getElementById('id_nombre_original_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_nombre_original_programa()');

    document.getElementById('id_autor_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_autor_programa()');

    document.getElementById('id_autor_original_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_autor_original_programa()');

    document.getElementById('id_ano_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_ano_programa()');

    document.getElementById('id_ano_original_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_ano_original_programa()');

    document.getElementById('id_requisitos_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_requisitos_programa()');

    document.getElementById('id_poblacion_desde_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_id_poblacion_desde_programa()');

    document.getElementById('id_poblacion_hasta_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_poblacion_hasta_programa()');

    document.getElementById('id_unidad_poblacion').setAttribute('onblur', 'return Gestion_programa.comprobar_unidad_poblacion()');

    document.getElementById('id_tipo_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_tipo_programa()');

    document.getElementById('id_tiempo_aplicacion_programa').setAttribute('onblur',  'return Gestion_programa.comprobar_tiempo_aplicacion_programa()');

    //document.getElementById('id_descrip_interp_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_descrip_interp_programa()');

    //document.getElementById('id_fichero_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_fichero_programa()');

    document.getElementById('id_enlace_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_enlace_programa()');

    document.getElementById('id_formato_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_formato_programa()');

    document.getElementById('id_modo_correccion_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_modo_correccion_programa()');

    document.getElementById('id_modo_aplicacion_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_modo_aplicacion_programa()');

    //document.getElementById('id_imagen_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_imagen_programa()');


    let botonadd = document.createElement('button');
    botonadd.type = 'submit';
    let imgadd = document.createElement('img');
    imgadd.src = './iconos/ADD.png';
    botonadd.append(imgadd);
    document.getElementById('IU_form').append(botonadd);

    setLang();

    document.getElementById('div_IU_form').style.display = 'block';

  }

  static async createForm_EDIT(id_programa, nombre_programa, acronimo_programa, nombre_original_programa, autor_programa, autor_original_programa, ano_programa,
    ano_original_programa, requisitos_programa, poblacion_desde_programa, poblacion_hasta_programa, unidad_poblacion, tipo_programa,
    tiempo_aplicacion_programa, descrip_interp_programa, fichero_programa, enlace_programa, formato_programa,
    modo_correccion_programa, modo_aplicacion_programa, imagen_programa) {

    this.recargarform();

    document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_EDIT_programa";

    document.getElementById('IU_form').action = 'javascript:Gestion_programa.EDIT();';
    document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit();');

    document.getElementById('id_id_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_id_programa()');
    document.getElementById('id_id_programa').value = id_programa;
    document.getElementById('id_id_programa').setAttribute("readonly", "");

    document.getElementById('id_nombre_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_nombre_programa()');
    document.getElementById('id_nombre_programa').value = nombre_programa;

    document.getElementById('id_acronimo_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_acronimo_programa()');
    document.getElementById('id_acronimo_programa').value = acronimo_programa;

    document.getElementById('id_nombre_original_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_nombre_original_programa()');
    document.getElementById('id_nombre_original_programa').value = nombre_original_programa;

    document.getElementById('id_autor_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_autor_programa()');
    document.getElementById('id_autor_programa').value = autor_programa;

    document.getElementById('id_autor_original_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_autor_original_programa()');
    document.getElementById('id_autor_original_programa').value = autor_original_programa;

    document.getElementById('id_ano_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_ano_programa()');
    document.getElementById('id_ano_programa').value = ano_programa;

    document.getElementById('id_ano_original_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_ano_original_programa()');
    document.getElementById('id_ano_original_programa').value = ano_original_programa;

    document.getElementById('id_requisitos_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_requisitos_programa()');
    document.getElementById('id_requisitos_programa').value = requisitos_programa;

    document.getElementById('id_poblacion_desde_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_poblacion_desde_programa()');
    document.getElementById('id_poblacion_desde_programa').value = poblacion_desde_programa;

    document.getElementById('id_poblacion_hasta_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_poblacion_hasta_programa()');
    document.getElementById('id_poblacion_hasta_programa').value = poblacion_hasta_programa;

    document.getElementById('id_unidad_poblacion').setAttribute('onblur', 'return Gestion_programa.comprobar_unidad_poblacion()');
    document.getElementById('id_unidad_poblacion').value = unidad_poblacion;

    document.getElementById('id_tipo_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_tipo_programa()');
    document.getElementById('id_tipo_programa').value = tipo_programa;

    document.getElementById('id_tiempo_aplicacion_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_tiempo_aplicacion_programa()');
    document.getElementById('id_tiempo_aplicacion_programa').value = tiempo_aplicacion_programa;

    //document.getElementById('id_descrip_interp_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_descrip_interp_programa()');
    //document.getElementById('id_descrip_interp_programa').value = descrip_interp_programa;

    //document.getElementById('id_fichero_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_fichero_programa()');
    //document.getElementById('id_fichero_programa').value = fichero_programa;

    document.getElementById('id_enlace_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_enlace_programa()');
    document.getElementById('id_enlace_programa').value = enlace_programa;

    document.getElementById('id_formato_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_formato_programa()');
    document.getElementById('id_formato_programa').value = formato_programa;

    document.getElementById('id_modo_correccion_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_modo_correccion_programa()');
    document.getElementById('id_modo_correccion_programa').value = modo_correccion_programa;

    document.getElementById('id_modo_aplicacion_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_modo_aplicacion_programa()');
    document.getElementById('id_modo_aplicacion_programa').value = modo_aplicacion_programa;

    //document.getElementById('id_imagen_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_imagen_programa()');
    //document.getElementById('id_imagen_programa').value = imagen_programa;

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


  static async createForm_DELETE(id_programa, nombre_programa, acronimo_programa, nombre_original_programa, autor_programa, autor_original_programa, ano_programa,
    ano_original_programa, requisitos_programa, poblacion_desde_programa, poblacion_hasta_programa, unidad_poblacion, tipo_programa,
    tiempo_aplicacion_programa, descrip_interp_programa, fichero_programa, enlace_programa, formato_programa,
    modo_correccion_programa, modo_aplicacion_programa, imagen_programa) {

    // resetear el formulario
    this.recargarform();

    // rellenar titulo formulario
    document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_DELETE_programa";

    // se rellena el action del formulario
    document.getElementById('IU_form').action = 'javascript:Gestion_programa.DELETE();';

    // se coloca el onblur del dni y se pone a vacio el valor 
    document.getElementById('id_id_programa').value = id_programa;
    document.getElementById('id_id_programa').setAttribute("readonly", "");
    // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
    document.getElementById('id_nombre_programa').value = nombre_programa;
    document.getElementById('id_nombre_programa').setAttribute("readonly", "");

    document.getElementById('id_acronimo_programa').value = acronimo_programa;
    document.getElementById('id_acronimo_programa').setAttribute("readonly", "");

    document.getElementById('id_nombre_original_programa').value = nombre_original_programa;
    document.getElementById('id_nombre_original_programa').setAttribute("readonly", "");

    document.getElementById('id_autor_programa').value = autor_programa;
    document.getElementById('id_autor_programa').setAttribute("readonly", "");

    document.getElementById('id_autor_original_programa').value = autor_original_programa;
    document.getElementById('id_autor_original_programa').setAttribute("readonly", "");

    document.getElementById('id_ano_programa').value = ano_programa;
    document.getElementById('id_ano_programa').setAttribute("readonly", "");

    document.getElementById('id_ano_original_programa').value = ano_original_programa;
    document.getElementById('id_ano_original_programa').setAttribute("readonly", "");

    document.getElementById('id_requisitos_programa').value = requisitos_programa;
    document.getElementById('id_requisitos_programa').setAttribute("readonly", "");

    document.getElementById('id_poblacion_desde_programa').value = poblacion_desde_programa;
    document.getElementById('id_poblacion_desde_programa').setAttribute("readonly", "");

    document.getElementById('id_poblacion_hasta_programa').value = poblacion_hasta_programa;
    document.getElementById('id_poblacion_hasta_programa').setAttribute("readonly", "");

    document.getElementById('id_unidad_poblacion').value = unidad_poblacion;
    document.getElementById('id_unidad_poblacion').setAttribute("readonly", "");

    document.getElementById('id_tipo_programa').value = tipo_programa;
    document.getElementById('id_tipo_programa').setAttribute("readonly", "");

    document.getElementById('id_tiempo_aplicacion_programa').value = tiempo_aplicacion_programa;
    document.getElementById('id_tiempo_aplicacion_programa').setAttribute("readonly", "");

    //document.getElementById('id_descrip_interp_programa').value = descrip_interp_programa;
    //document.getElementById('id_descrip_interp_programa').setAttribute("readonly", "");

    //document.getElementById('id_fichero_programa').value = fichero_programa;
    //document.getElementById('id_fichero_programa').setAttribute("readonly", "");

    document.getElementById('id_enlace_programa').value = enlace_programa;
    document.getElementById('id_enlace_programa').setAttribute("readonly", "");

    document.getElementById('id_formato_programa').value = formato_programa;
    document.getElementById('id_formato_programa').setAttribute("readonly", "");

    document.getElementById('id_modo_correccion_programa').value = modo_correccion_programa;
    document.getElementById('id_modo_correccion_programa').setAttribute("readonly", "");

    document.getElementById('id_modo_aplicacion_programa').value = modo_aplicacion_programa;
    document.getElementById('id_modo_aplicacion_programa').setAttribute("readonly", "");

    //document.getElementById('id_imagen_programa').value = imagen_programa;
    //document.getElementById('id_imagen_programa').setAttribute("readonly", "");



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

  static async createForm_SHOWCURRENT(id_programa, nombre_programa, acronimo_programa, nombre_original_programa, autor_programa, autor_original_programa, ano_programa,
    ano_original_programa, requisitos_programa, poblacion_desde_programa, poblacion_hasta_programa, unidad_poblacion, tipo_programa,
    tiempo_aplicacion_programa, descrip_interp_programa, fichero_programa, enlace_programa, formato_programa,
    modo_correccion_programa, modo_aplicacion_programa, imagen_programa) {

    // reutilizo la creación del delete porque me implica pocas modificaciones
    this.createForm_DELETE(id_programa, nombre_programa, acronimo_programa, nombre_original_programa, autor_programa, autor_original_programa, ano_programa,
      ano_original_programa, requisitos_programa, poblacion_desde_programa, poblacion_hasta_programa, unidad_poblacion, tipo_programa,
      tiempo_aplicacion_programa, descrip_interp_programa, fichero_programa, enlace_programa, formato_programa,
      modo_correccion_programa, modo_aplicacion_programa, imagen_programa);

    // rellenar titulo del formulario
    document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SHOWCURRENT_programa";

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
    document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SEARCH_programa";

    // se rellena el action del formulario
    document.getElementById('IU_form').action = 'javascript:Gestion_programa.SEARCH();';
    document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit_SEARCH();');

    // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetear formusuario
    document.getElementById('id_id_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_id_programa_SEARCH()');

    document.getElementById('id_nombre_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_nombre_programa_SEARCH()');

    document.getElementById('id_acronimo_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_acronimo_programa_SEARCH()');

    document.getElementById('id_nombre_original_programa').setAttribute('onchange', 'return Gestion_programa.comprobar_nombre_original_programa_SEARCH()');

    document.getElementById('id_autor_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_autor_programa_SEARCH()');

    document.getElementById('id_autor_original_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_autor_original_programa_SEARCH()');

    document.getElementById('id_ano_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_ano_programa_SEARCH()');

    document.getElementById('id_ano_original_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_ano_original_programa_SEARCH()');

    document.getElementById('id_requisitos_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_requisitos_programa_SEARCH()');

    document.getElementById('id_poblacion_desde_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_poblacion_desde_programa_SEARCH()');

    document.getElementById('id_poblacion_hasta_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_poblacion_hasta_programa_SEARCH()');

    document.getElementById('id_unidad_poblacion').setAttribute('onblur', 'return Gestion_programa.comprobar_unidad_poblacion_SEARCH()');

    document.getElementById('id_tipo_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_tipo_programa_SEARCH()');

    document.getElementById('id_tiempo_aplicacion_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_tiempo_aplicacion_programa_SEARCH()');

    //document.getElementById('id_descrip_interp_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_descrip_interp_programa_SEARCH()');

    //document.getElementById('id_fichero_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_fichero_programa_SEARCH()');

    document.getElementById('id_enlace_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_enlace_programa_SEARCH()');

    document.getElementById('id_formato_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_formato_programa_SEARCH()');

    document.getElementById('id_modo_correccion_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_modo_correccion_programa_SEARCH()');

    document.getElementById('id_modo_aplicacion_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_modo_aplicacion_programa_SEARCH()');

    //document.getElementById('id_imagen_programa').setAttribute('onblur', 'return Gestion_programa.comprobar_imagen_programa_SEARCH()');


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

    let valor = this.comprobar_id_programa();
    let valor1 = this.comprobar_nombre_programa();
    let valor2 = this.comprobar_acronimo_programa();
    let valor3 = this.comprobar_nombre_original_programa();
    let valor4 = this.comprobar_autor_programa();
    let valor5 = this.comprobar_autor_original_programa();
    let valor6 = this.comprobar_ano_programa();
    let valor7 = this.comprobar_ano_original_programa();
    let valor8 = this.comprobar_requisitos_programa();
    let valor9 = this.comprobar_poblacion_desde_programa();
    let valor10 = this.comprobar_poblacion_hasta_programa();
    let valor11 = this.comprobar_unidad_poblacion();
    let valor12 = this.comprobar_tipo_programa();
    let valor13 = this.comprobar_tiempo_aplicacion_programa();
    let valor14 = this.comprobar_descrip_interp_programa();
    let valor15 = this.comprobar_fichero_programa();
    let valor16 = this.comprobar_enlace_programa();
    let valor17 = this.comprobar_formato_programa();
    let valor18 = this.comprobar_modo_correccion_programa();
    let valor19 = this.comprobar_modo_aplicacion_programa();
    let valor20 = this.comprobar_imagen_programa();


    let resultado = (
      valor &&
      valor1 &&
      valor2 &&
      valor3 &&
      valor4 &&
      valor5 &&
      valor6 &&
      valor7 &&
      valor8 &&
      valor9 &&
      valor10 &&
      valor11 &&
      valor12 &&
      valor13 &&
      valor14 &&
      valor15 &&
      valor16 &&
      valor17 &&
      valor18 &&
      valor19 &&
      valor20
    );

    return resultado;


  }


  static comprobar_submit_SEARCH() {

    let valor = this.comprobar_id_programa_SEARCH();
    let valor1 = this.comprobar_nombre_programa_SEARCH();
    let valor2 = this.comprobar_acronimo_programa_SEARCH();
    let valor3 = this.comprobar_nombre_original_programa_SEARCH();
    let valor4 = this.comprobar_autor_programa_SEARCH();
    let valor5 = this.comprobar_autor_original_programa_SEARCH();
    let valor6 = this.comprobar_ano_programa_SEARCH();
    let valor7 = this.comprobar_ano_original_programa_SEARCH();
    let valor8 = this.comprobar_requisitos_programa_SEARCH();
    let valor9 = this.comprobar_poblacion_desde_programa_SEARCH();
    let valor10 = this.comprobar_poblacion_hasta_programa_SEARCH();
    let valor11 = this.comprobar_unidad_poblacion_SEARCH();
    let valor12 = this.comprobar_tipo_programa_SEARCH();
    let valor13 = this.comprobar_tiempo_aplicacion_programa_SEARCH();
    let valor14 = this.comprobar_descrip_interp_programa_SEARCH();
    let valor15 = this.comprobar_fichero_programa_SEARCH();
    let valor16 = this.comprobar_enlace_programa_SEARCH();
    let valor17 = this.comprobar_formato_programa_SEARCH();
    let valor18 = this.comprobar_modo_correccion_programa_SEARCH();
    let valor19 = this.comprobar_modo_aplicacion_programa_SEARCH();
    let valor20 = this.comprobar_imagen_programa_SEARCH();


    let resultado = (
      valor &&
      valor1 &&
      valor2 &&
      valor3 &&
      valor4 &&
      valor5 &&
      valor6 &&
      valor7 &&
      valor8 &&
      valor9 &&
      valor10 &&
      valor11 &&
      valor12 &&
      valor13 &&
      valor14 &&
      valor15 &&
      valor16 &&
      valor17 &&
      valor18 &&
      valor19 &&
      valor20
    );

    return resultado;


  }

  static comprobar_id_programa() {
    
    if(validacionesatomicas.digitos('id_id_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_id_persona', 'KO_formato_id_programa');
      return false;
    }

    if(validacionesatomicas.size_minimo('id_id_programa',1)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_id_programa', 'KO_id_programa_tam_min');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_id_programa', 6)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_id_programa', 'KO_id_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_id_programa');
    return true;
  }

  static comprobar_nombre_programa() {
    
    if(validacionesatomicas.alfabeticoAcentosÑyEspacios('id_nombre_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_nombre_programa', 'KO_formato_nombre_programa');
      return false;
    }

    if(validacionesatomicas.size_minimo('id_nombre_programa',6)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_nombre_programa', 'KO_nombre_programa_tam_min');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_nombre_programa', 60)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_nombre_programa', 'KO_nombre_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_nombre_programa');
    return true;
  }

  static comprobar_acronimo_programa() {
    
    if(validacionesatomicas.soloAlfabetico('id_acronimo_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_acronimo_programa', 'KO_formato_acronimo_programa');
      return false;
    }

    if(validacionesatomicas.size_minimo('id_acronimo_programa',3)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_acronimo_programa', 'KO_acronimo_programa_tam_min');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_acronimo_programa', 20)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_acronimo_programa', 'KO_acronimo_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_acronimo_programa');
    return true;
  }

  static comprobar_nombre_original_programa() {
    
    if(validacionesatomicas.alfabeticoAcentosÑyEspacios('id_nombre_original_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_nombre_original_programa', 'KO_formato_nombre_original_programa');
      return false;
    }

    if(validacionesatomicas.size_minimo('id_nombre_original_programa',6)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_nombre_original_programa', 'KO_nombre_original_programa_tam_min');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_nombre_original_programa', 60)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_nombre_original_programa', 'KO_nombre_original_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_nombre_original_programa');
    return true;
  }

  static comprobar_autor_programa() {
    
    if(validacionesatomicas.alfabeticoAcentosÑyEspacios('id_autor_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_autor_programa', 'KO_formato_autor_programa');
      return false;
    }

    if(validacionesatomicas.size_minimo('id_autor_programa',6)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_autor_programa', 'KO_autor_programa_tam_min');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_autor_programa', 50)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_autor_programa', 'KO_autor_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_autor_programa');
    return true;
  }

  static comprobar_autor_original_programa() {
    
    if(validacionesatomicas.alfabeticoAcentosÑyEspacios('id_autor_original_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_autor_original_programa', 'KO_formato_autor_original_programa');
      return false;
    }

    if(validacionesatomicas.size_minimo('id_autor_original_programa',6)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_autor_original_programa', 'KO_autor_original_programa_tam_min');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_autor_original_programa', 50)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_autor_original_programa', 'KO_autor_original_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_autor_original_programa');
    return true;
  }

  static comprobar_ano_programa() {
    
    if(validacionesatomicas.digitos('id_ano_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_ano_programa', 'KO_formato_ano_programa');
      return false;
    }

    if(validacionesatomicas.size_minimo('id_ano_programa',4)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_ano_programa', 'KO_ano_programa_tam_min');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_ano_programa', 4)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_ano_programa', 'KO_ano_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_ano_programa');
    return true;
  }

  static comprobar_ano_original_programa() {
    
    if(validacionesatomicas.digitos('id_ano_original_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_ano_original_programa', 'KO_formato_ano_original_programa');
      return false;
    }

    if(validacionesatomicas.size_minimo('id_ano_original_programa',4)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_ano_original_programa', 'KO_ano_original_programa_tam_min');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_ano_original_programa', 4)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_ano_original_programa', 'KO_ano_original_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_ano_original_programa');
    return true;
  }

  static comprobar_requisitos_programa() {
    
    if(validacionesatomicas.alfabeticoAcentosÑyEspaciosPuntuacion('id_requisitos_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_requisitos_programa', 'KO_formato_requisitos_programa');
      return false;
    }

    if(validacionesatomicas.size_minimo('id_requisitos_programa',6)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_requisitos_programa', 'KO_requisitos_programa_tam_min');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_requisitos_programa', 300)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_requisitos_programa', 'KO_requisitos_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_requisitos_programa');
    return true;
  }

  static comprobar_poblacion_desde_programa() {
    
    if(validacionesatomicas.digitos('id_poblacion_desde_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_poblacion_desde_programa', 'KO_formato_poblacion_desde_programa');
      return false;
    }

    if(validacionesatomicas.size_minimo('id_poblacion_desde_programa',1)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_poblacion_desde_programa', 'KO_poblacion_desde_programa_tam_min');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_poblacion_desde_programa', 2)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_poblacion_desde_programa', 'KO_poblacion_desde_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_poblacion_desde_programa');
    return true;
  }

  static comprobar_poblacion_hasta_programa() {
    
    if(validacionesatomicas.digitos('id_poblacion_hasta_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_poblacion_hasta_programa', 'KO_formato_poblacion_hasta_programa');
      return false;
    }

    if(validacionesatomicas.size_minimo('id_poblacion_hasta_programa',1)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_poblacion_hasta_programa', 'KO_poblacion_hasta_programa_tam_min');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_poblacion_hasta_programa', 2)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_poblacion_hasta_programa', 'KO_poblacion_hasta_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_poblacion_hasta_programa');
    return true;
  }

  static comprobar_unidad_poblacion() {
    
    if(document.getElementById('id_unidad_poblacion').value == ""){
      DOM_class.mostrardivmensajeserrordebajo("id_unidad_poblacion", 'KO_formato_unidad_poblacion');
      return false;
    }
    else{
      DOM_class.mostrarexitovalor('id_unidad_poblacion');
      return true;
    }
  }

  static comprobar_tipo_programa() {
    
    if(document.getElementById('id_tipo_programa').value == ""){
      DOM_class.mostrardivmensajeserrordebajo("id_tipo_programa", 'KO_formato_tipo_programa');
      return false;
    }
    else{
      DOM_class.mostrarexitovalor('id_tipo_programa');
      return true;
    }
  }

  static comprobar_tiempo_aplicacion_programa() {
    
    if(validacionesatomicas.digitos('id_tiempo_aplicacion_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_tiempo_aplicacion_programa', 'KO_formato_tiempo_aplicacion_programa');
      return false;
    }

    if(validacionesatomicas.size_minimo('id_tiempo_aplicacion_programa',1)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_tiempo_aplicacion_programa', 'KO_tiempo_aplicacion_programa_tam_min');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_tiempo_aplicacion_programa', 4)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_tiempo_aplicacion_programa', 'KO_tiempo_aplicacion_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_tiempo_aplicacion_programa');
    return true;
  }
  

  static comprobar_descrip_interp_programa() {
    
    if(validacionesatomicas.alfabeticoAcentosÑyEspaciosPuntuacionRetornoCarro('id_descrip_interp_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_descrip_interp_programa', 'KO_formato_descrip_interp_programa');
      return false;
    }

    if(validacionesatomicas.size_minimo('id_descrip_interp_programa', 100)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_descrip_interp_programa', 'KO_descrip_interp_programa_tam_min');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_descrip_interp_programa', 5000)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_descrip_interp_programa', 'KO_descrip_interp_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_descrip_interp_programa');
    return true;
  }

  static comprobar_fichero_programa() {
    
    const tamMax = 2000000;
    const fichero = document.getElementById('id_fichero_programa').file[0];

    if(fichero.size <= tamMax){
      const nombreFichero = fichero.name;
      const extension = nombreFichero.split('.').pop().toLowercase();

      if(extension ==='pdf' || extension ==='doc' || extension ==='docx'){
        DOM_class.mostrarexitovalor('id_fichero_programa');
        return true;
      }
      else{
        DOM_class.mostrardivmensajeserrordebajo('id_fichero_programa', 'KO_fromato_fichero_programa');
        return false;
      }  
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_fichero_programa', 'KO_fichero_programa_tam_max');
      return false;
    }
  }

  static comprobar_enlace_programa() {
    
    if(validacionesatomicas.soloAlfabeticoYPuntEsp('id_enlace_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_enlace_programa', 'KO_formato_enlace_programa');
      return false;
    }

    if(validacionesatomicas.size_minimo('id_enlace_programa', 10)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_enlace_programa', 'KO_enlace_programa_tam_min');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_enlace_programa', 100)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_enlace_programa', 'KO_enlace_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_enlace_programa');
    return true;
  }

  static comprobar_formato_programa() {
    
    if(document.getElementById('id_formato_programa').value == ""){
      DOM_class.mostrardivmensajeserrordebajo("id_formato_programa", 'KO_formato_formato_programa');
      return false;
    }
    else{
      DOM_class.mostrarexitovalor('id_formato_programa');
      return true;
    }
  }

  static comprobar_modo_correccion_programa() {
    
    if(document.getElementById('id_modo_correccion_programa').value == ""){
      DOM_class.mostrardivmensajeserrordebajo("id_modo_correccion_programa", 'KO_formato_modo_correccion_programa');
      return false;
    }
    else{
      DOM_class.mostrarexitovalor('id_modo_correccion_programa');
      return true;
    }
  }

  static comprobar_modo_aplicacion_programa() {
    
    if(document.getElementById('id_modo_aplicacion_programa').value == ""){
      DOM_class.mostrardivmensajeserrordebajo("id_modo_aplicacion_programa", 'KO_formato_modo_aplicacion_programa');
      return false;
    }
    else{
      DOM_class.mostrarexitovalor('id_modo_aplicacion_programa');
      return true;
    }
  }

  static comprobar_imagen_programa() {
    
    const tamMax = 20000;
    const imagen = document.getElementById('id_imagen_programa').file[0];

    if(imagen.size <= tamMax){
      const nombreImagen = imagen.name;
      const extension = nombreImagen.split('.').pop().toLowercase();

      if(extension ==='jpg' || extension ==='jpeg'){
        DOM_class.mostrarexitovalor('id_imagen_programa');
        return true;
      }
      else{
        DOM_class.mostrardivmensajeserrordebajo('id_imagen_programa', 'KO_fromato_imagen_programa');
        return false;
      }  
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_imagen_programa', 'KO_imagen_programa_tam_max');
      return false;
    }
  }


  static comprobar_id_programa_SEARCH() {
    
    if(validacionesatomicas.digitos('id_id_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_id_persona', 'KO_formato_id_programa');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_id_programa', 6)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_id_programa', 'KO_id_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_id_programa');
    return true;
  }
  

  static comprobar_nombre_programa_SEARCH() {
    
    if(validacionesatomicas.alfabeticoAcentosÑyEspacios('id_nombre_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_nombre_programa', 'KO_formato_nombre_programa');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_nombre_programa', 60)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_nombre_programa', 'KO_nombre_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_nombre_programa');
    return true;
  }
  

  static comprobar_acronimo_programa_SEARCH() {
    
    if(validacionesatomicas.soloAlfabetico('id_acronimo_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_acronimo_programa', 'KO_formato_acronimo_programa');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_acronimo_programa', 20)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_acronimo_programa', 'KO_acronimo_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_acronimo_programa');
    return true;
  }

  static comprobar_nombre_original_programa_SEARCH() {
    
    if(validacionesatomicas.alfabeticoAcentosÑyEspacios('id_nombre_original_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_nombre_original_programa', 'KO_formato_nombre_original_programa');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_nombre_original_programa', 60)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_nombre_original_programa', 'KO_nombre_original_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_nombre_original_programa');
    return true;
  }
  

  static comprobar_autor_programa_SEARCH() {
    
    if(validacionesatomicas.alfabeticoAcentosÑyEspacios('id_autor_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_autor_programa', 'KO_formato_autor_programa');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_autor_programa', 50)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_autor_programa', 'KO_autor_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_autor_programa');
    return true;
  }

  static comprobar_autor_original_programa_SEARCH() {
    
    if(validacionesatomicas.alfabeticoAcentosÑyEspacios('id_autor_original_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_autor_original_programa', 'KO_formato_autor_original_programa');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_autor_original_programa', 50)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_autor_original_programa', 'KO_autor_original_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_autor_original_programa');
    return true;
  }

  static comprobar_ano_programa_SEARCH() {
    
    if(validacionesatomicas.digitos('id_ano_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_ano_programa', 'KO_formato_ano_programa');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_ano_programa', 4)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_ano_programa', 'KO_ano_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_ano_programa');
    return true;
  }

  static comprobar_ano_original_programa_SEARCH() {
    
    if(validacionesatomicas.digitos('id_ano_original_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_ano_original_programa', 'KO_formato_ano_original_programa');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_ano_original_programa', 4)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_ano_original_programa', 'KO_ano_original_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_ano_original_programa');
    return true;
  }

  static comprobar_requisitos_programa_SEARCH() {
    
    if(validacionesatomicas.alfabeticoAcentosÑyEspaciosPuntuacion('id_requisitos_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_requisitos_programa', 'KO_formato_requisitos_programa');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_requisitos_programa', 300)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_requisitos_programa', 'KO_requisitos_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_requisitos_programa');
    return true;
  }

  static comprobar_poblacion_desde_programa_SEARCH() {
    
    if(validacionesatomicas.digitos('id_poblacion_desde_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_poblacion_desde_programa', 'KO_formato_poblacion_desde_programa');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_poblacion_desde_programa', 2)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_poblacion_desde_programa', 'KO_poblacion_desde_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_poblacion_desde_programa');
    return true;
  }

  static comprobar_poblacion_hasta_programa_SEARCH() {
    
    if(validacionesatomicas.digitos('id_poblacion_hasta_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_poblacion_hasta_programa', 'KO_formato_poblacion_hasta_programa');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_poblacion_hasta_programa', 2)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_poblacion_hasta_programa', 'KO_poblacion_hasta_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_poblacion_hasta_programa');
    return true;
  }

  static comprobar_unidad_poblacion_SEARCH() {
    return true;
  }

  static comprobar_tipo_programa_SEARCH() {
    return true;
  }

  static comprobar_tiempo_aplicacion_programa_SEARCH() {
    
    if(validacionesatomicas.digitos('id_tiempo_aplicacion_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_tiempo_aplicacion_programa', 'KO_formato_tiempo_aplicacion_programa');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_tiempo_aplicacion_programa', 4)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_tiempo_aplicacion_programa', 'KO_tiempo_aplicacion_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_tiempo_aplicacion_programa');
    return true;
  }

  static comprobar_descrip_interp_programa_SEARCH() {
    
    if(validacionesatomicas.alfabeticoAcentosÑyEspaciosPuntuacionRetornoCarro('id_descrip_interp_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_descrip_interp_programa', 'KO_formato_descrip_interp_programa');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_descrip_interp_programa', 5000)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_descrip_interp_programa', 'KO_descrip_interp_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_descrip_interp_programa');
    return true;
  }

  static comprobar_fichero_programa_SEARCH() {
    return true
  }

  static comprobar_enlace_programa_SEARCH() {
    
    if(validacionesatomicas.soloAlfabeticoYPuntEsp('id_enlace_programa')){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_enlace_programa', 'KO_formato_enlace_programa');
      return false;
    }

    if(validacionesatomicas.size_maximo('id_enlace_programa', 100)){
    }
    else{
      DOM_class.mostrardivmensajeserrordebajo('id_enlace_programa', 'KO_enlace_programa_tam_max');
      return false;
    }

    DOM_class.mostrarexitovalor('id_enlace_programa');
    return true;
  }

  static comprobar_formato_programa_SEARCH() {
    return true;
  }

  static comprobar_modo_correccion_programa_SEARCH() {
    return true;
  }

  static comprobar_modo_aplicacion_programa_SEARCH() {
    return true;
  }

  static comprobar_imagen_programa_SEARCH() {
    return true;
  }
//preguntar profesor


  static async ADD() {
    await this.peticionBackGeneral('IU_form', 'programa', 'ADD')
      .then((respuesta) => {
        if (respuesta['ok']) {
          this.resetearFormPrograma();
          this.SEARCH();
        }
        else {
          DOM_class.mostrardivmensajes(respuesta['code']);
        }
      });
  }

  static async EDIT() {
    await this.peticionBackGeneral('IU_form', 'programa', 'EDIT')
      .then((respuesta) => {
        if (respuesta['ok']) {
          this.resetearFormPrograma();
          this.SEARCH();
        }
        else {
          DOM_class.mostrardivmensajes(respuesta['code']);
        }
      });
  }

  static async DELETE() {
    await this.peticionBackGeneral('IU_form', 'programa', 'DELETE')
      .then((respuesta) => {
        if (respuesta['ok']) {
          resetearFormPrograma();
          this.SEARCH();
        }
        else {
          DOM_class.mostrardivmensajes(respuesta['code']);
        }
      });
  }

  static async SEARCH() {
    await this.peticionBackGeneral('IU_form', 'programa', 'SEARCH')
      .then((respuesta) => {
        this.resetearFormPrograma();
        let programa = new Gestion_programa('programa', respuesta['resource'], Array('id_programa', 'nombre_programa', 'autor_programa')); programa.mostrartabla();
        if (respuesta['code'] == 'RECORDSET_VACIO') {
          document.getElementById('muestradatostabla').innerHTML = 'no hay datos coincidentes con la busqueda';
        }
      });
  }


  static recargarform() {

    document.getElementById("IU_form").innerHTML = '';

    document.getElementById("IU_form").innerHTML = `

    
      <label for="id_id_programa" class="label_id_programa"></label>
      <input type="text" id="id_id_programa" name="id_programa" placeholder="">
      <div id="div_error_id_programa" class="errocampo"><a id="error_id_programa"></a></div>

      <label for="id_nombre_programa" class="label_nombre_programa"></label>
      <input type="text" id="id_nombre_programa" name="nombre_programa" placeholder="">
      <div id="div_error_nombre_programa" class="errocampo"><a id="error_nombre_programa"></a></div>

      <label for="id_acronimo_programa" class="label_acronimo_programa"></label>
      <input type="text" id="id_acronimo_programa" name="acronimo_programa" placeholder="">
      <div id="div_error_acronimo_programa" class="errocampo"><a id="error_acronimo_programa"></a></div>

      <label for="id_nombre_original_programa" class="label_nombre_original_programa"></label>
      <input type="text" id="id_nombre_original_programa" name="nombre_original_programa" placeholder="">
      <div id="div_error_nombre_original_programa" class="errocampo"><a id="error_nombre_original_programa"></a></div>

      <label for="id_autor_programa" class="label_autor_programa"></label>
      <input type="text" id="id_autor_programa" name="autor_programa" placeholder="">
      <div id="div_error_autor_programa" class="errocampo"><a id="error_autor_programa"></a></div>

      <label for="id_autor_original_programa" class="label_autor_original_programa"></label>
      <input type="text" id="id_autor_original_programa" name="autor_original_programa" placeholder="">
      <div id="div_error_autor_original_programa" class="errocampo"><a id="error_autor_original_programa"></a></div>

      <label for="id_ano_programa" class="label_ano_programa"></label>
      <input type="text" id="id_ano_programa" name="ano_programa" placeholder="dd/mm/aaaa">
      <div id="div_error_ano_programa" class="errocampo"><a id="error_ano_programa"></a></div>

      <label for="id_ano_original_programa" class="label_ano_original_programa"></label>
      <input type="text" id="id_ano_original_programa" name="ano_original_programa" placeholder="">
      <div id="div_error_ano_original_programa" class="errocampo"><a id="error_ano_original_programa"></a></div>

      <label for="id_requisitos_programa" class="label_requisitos_programa"></label>
      <input type="text" id="id_requisitos_programa" name="requisitos_programa" placeholder="">
      <div id="div_error_requisitos_programa" class="errocampo"><a id="error_requisitos_programa"></a></div>

      <label for="id_poblacion_desde_programa" class="label_poblacion_desde_programa"></label>
      <input type="text" id="id_poblacion_desde_programa" name="poblacion_desde_programa" placholder="">
      <div id="div_error_poblacion_desde_programa" class="errocampo"><a id="error_poblacion_desde_programa"></a></div>

      <label for="id_poblacion_hasta_programa" class="label_poblacion_hasta_programa"></label>
      <input type="text" id="id_poblacion_hasta_programa" name="poblacion_hasta_programa" placeholder="">
      <div id="div_error_poblacion_hasta_programa" class="errocampo"><a id="error_poblacion_hasta_programa"></a></div>

      <label for="id_unidad_poblacion" class="label_unidad_poblacion"></label>
      <select id="id_unidad_poblacion" name="unidad_poblacion">
        <option value="" selected> seleccione una opcion</option>
        <option value="MESES">MESES</option>
        <option value="ANOS">AÑOS</option>
      </select>
      <div id="div_error_unidad_poblacion" class="errocampo"><a id="error_unidad_poblacion"></a></div>
      
      <label for="id_tipo_programa" class="label_tipo_programa"></label>
      <select id="id_tipo_programa" name="tipo_programa">
        <option value="" selected> seleccione una opcion</option>
        <option value="EVALUACION">EVALUACION</option>
        <option value="INTERVENCION">INTERVENCION</option>
        <option value="EVALUACION E INTERVENCION">EVALUACION E INTERVENCION</option>
      </select>
      <div id="div_error_tipo_programa" class="errocampo"><a id="error_tipo_programa"></a></div>
      
      <label for="id_tiempo_aplicacion_programa" class="label_tiempo_aplicacion_programa"></label>
      <input type="text" id="id_tiempo_aplicacion_programa" name="tiempo_aplicacion_programa" placeholder="">
      <div id="div_error_tiempo_aplicacion_programa" class="errocampo"><a id="error_tiempo_aplicacion_programa></a></div>
      
      <label for="id_descrip_interp_programa" class="label_descrip_interp_programa"></labal>
      <input type="text" id="id_descrip_interp_programa" name="descrip_interp_programa" placeholder="">
      <div id="div_error_descrip_interp_programa" class="errocampo"><a id="error_descrip_interp_programa"></a></div>

      <label for="id_fichero_programa" class="label_fichero_programa"></label>
      <input type="file" id="id_fichero_programa" name="fichero_programa">
      <div id="div_error_fichero_programa" class="errocampo"><a id="error_fichero_programa"></a></div>

      <label for="id_enlace_programa" class="label_enlace_programa"></label>
      <input type="text" id="id_enlace_programa" name="enlace_programa" placeholder="">
      <div id="div_error_enlace_programa" class="errocampo"><a id="error_enlace_programa"></a></div>

      <label for="id_formato_programa" class="label_formato_programa"></label>
      <select id="id_formato_programa" name="formato_programa">
        <option value="" selected> seleccione una opcion</option>
        <option value="PAPEL">PAPEL</option>
        <option value="ELECTRONICO">ELECTRONICO</option>
        <option value="PAPEL Y ELECTRONICO">PAPEL Y ELECTRONICO</option>
      </select>
      <div id="div_error_formato_programa" class="errocampo"><a id="error_formato_programa"></a></div>

      <label for="id_modo_correccion_programa" class="label_modo_correccion_programa"></label>
      <select id="id_modo_correccion_programa" name="modo_correccion_programa">
        <option value="" selected> seleccione una opcion</option>
        <option value="PAPEL">PAPEL</option>
        <option value="ELECTRONICO">ELECTRONICO</option>
        <option value="PAPEL Y ELECTRONICO">PAPEL Y ELECTRONICO</option>
      </select>
      <div id="div_error_modo_correccion_programa" class="errocampo"><a id="error_modo_correccion_programa"></a></div>

      <label for="id_modo_aplicacion_programa" class="label_modo_aplicacion_programa"></label>
      <select id="id_modo_aplicacion_programa" name="modo_aplicacion_programa">
        <option value="" selected> seleccione una opcion</option>
        <option value="INDIVIDUAL">INDIVIDUAL</option>
        <option value="COLECTIVO">COLECTIVO</option>
        <option value="INDIVIDUAL Y COLECTIVO">INDIVIDUAL Y COLECTIVO</option>
      </select>
      <div id="div_error_modo_correccion_programa" class="errocampo"><a id="error_modo_correccion_programa"></a></div>

      <label for="id_imagen_programa" class="label_imagen_programa"></label>
      <input type="file" id="id_imagen_programa" name="imagen_programa">
      <div id="div_error_modo_aplicacion_programa" class="errocampo"><a id="error_modo_aplicacion_programa"></a></div>
        
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