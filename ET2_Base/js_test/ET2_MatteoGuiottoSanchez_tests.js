
var def_test= 
Array(
    //programa
    Array('1', 'programa', 'tamaño menor que 1', false, 'El id del programa debe tener como minimo un digito'),
    Array('2', 'programa', 'tamaño mayor que 6', false, 'El id del programa debe tener como maximo seis digitos'),
    Array('3', 'programa', 'Algun caracter != digito', false, 'El id del programa solo puede contener digitos'),
    Array('4', 'programa', 'tamaño mayor o igual que 1 && tamaño menor o igual que 6 && solo dígitos', true, 'Exito'),

    Array('1', 'programa', 'tamaño menor que 6', false, 'El nombre del programa debe tener como minimo seis digitos'),
    Array('2', 'programa', 'tamaño mayor que 60' , false, 'El nombre del programa debe tener como maximo sesenta digitos'),
    Array('3', 'programa', 'Algun caracter != Alfabetico con o sin acento, ñ o espacio', false, 'El nombre del programa solo puede contener caracteres alfabeticos con acentos, ñ y espacios'),
    Array('4', 'programa', 'tamaño mayor o igual que 6 && tamaño menor o igual que 60 && Alfabetico con o sin acento, ñ o espacio', true, 'Exito'),

    Array('1','programa', 'tamaño menor que 3', false, 'El acronimo del programa debe tener como minimo tres digitos'),
    Array('2','programa', 'tamaño mayor que 20', false, 'El acronimo del programa debe tener como maximo veinte digitos'),
    Array('3','programa', 'Algun caracter != Alfabetico sin acentos ni espacios', false, 'El acronimo del programa solo puede contener caracteres alfabeticos sin acentos ni espacios'),
    Array('4','programa', 'tamaño mayor o igual que 3 && tamaño menor o igual que 20 && Alfabetico sin acentos ni espacios', true, 'Exito'),

    Array('1', 'programa', 'tamaño menor que 6', false, 'El nombre original del programa debe tener como minimo tres digitos'),
    Array('2', 'programa', 'tamaño mayor que 60', false, 'El nombre original del programa debe tener como maximo veinte digitos'),
    Array('3', 'programa', 'Algun caracter != Alfabetico con o sin acento, ñ o espacio', false, 'El nombre original del programa solo puede contener caracteres alfabeticos con acentos, ñ y espacios'),
    Array('4', 'programa', 'tamaño mayor o igual que 6 && tamaño menor o igual que 60 && Alfabetico con o sin acento, ñ o espacio', true, 'Exito'),

    Array('1', 'programa', 'tamaño menor que 6', false, 'El autor del programa debe tener como minimo seis digitos'),
    Array('2', 'programa', 'tamaño mayor que 50', false, 'El autor del programa debe tener como maximo cincuenta digitos'),
    Array('3', 'programa', 'Algun caracter != Alfabetico con o sin acento, ñ o espacio', false, 'El sutor del programa solo puede contener caracteres alfabeticos con acentos, ñ y espacios'),
    Array('4', 'programa', 'tamaño mayor o igual que 6 && tamaño menor o igual que 50 && Alfabetico con o sin acento, ñ o espacio', true, 'Exito'),

    Array('1', 'programa', 'tamaño menor que 6', false, 'El autor original del programa debe tener como minimo seis digitos'),
    Array('2', 'programa',  'tamaño mayor que 50', false, 'El autor original del programa debe tener como maximo cincuenta digitos'),
    Array('3', 'programa', 'Algun caracter != Alfabetico con o sin acento, ñ o espacio', false, 'El autor original del programa solo puede contener caracteres alfabeticos con acentos, ñ y espacios'),
    Array('4', 'programa', 'tamaño mayor o igual que 6 && tamaño menor o igual que 50 && Alfabetico con o sin acento, ñ o espacio', true, 'Exito'),

    Array('1', 'programa', 'tamaño menor que 4', false, 'El ano del programa debe tener como minimo cuatro digitos'),
    Array('2', 'programa', 'tamaño mayor que 4', false, 'El ano del programa debe tener como maximo cuatro digitos'),
    Array('3', 'programa', 'ano superior al actual', false, 'El ano del programa no puede ser mayor del ano actual'),
    Array('4', 'programa', 'tamaño = 4 && ano no superior al actual', true, 'Exito'),

    Array('1', 'programa', 'tamaño menor que 4', false, 'El ano original del programa debe tener como minimo cuatro digitos'),
    Array('2', 'programa', 'tamaño mayor que 4', false, 'El ano original del programa debe tener como maximo cuatro digitos'),
    Array('3', 'programa', 'ano superior al actual', false, 'El ano original del programa no puede ser mayor del ano actual'),
    Array('4', 'programa', 'tamaño = 4 && ano no superior al actual', true, 'Exito'),

    Array('1', 'programa', 'tamaño menor que 6', false, 'Los requisitos del programa debe tener como minimo seis digitos'),
    Array('2', 'programa', 'tamaño mayor que 300', false, 'Los requisitos del programa debe tener como maximo trescientos digitos'),
    Array('3', 'programa', 'Algun caracter != Alfabetico con o sin acento, ñ, espacio o signos de puntuacion', false, 'El nombre original del programa solo puede contener caracteres alfabeticos con acentos, ñ, espacios y signos de puntuacion'),
    Array('4', 'programa', 'tamaño mayor o igual que 6 && tamaño menor o igual que 300 && Alfabetico con o sin acento, ñ, espacio o signos de puntuacion', true, 'Exito'),

    Array('1',  'programa', 'tamaño menor que 1', false, 'La poblacion desde programa debe tener como minimo un digito'),
    Array('2',  'programa', 'tamaño mayor que 2', false, 'La poblacion desde programa debe tener como maximo dos digitos'),
    Array('3',  'programa', 'tamaño = 2', true, 'Exito'),

    Array('1', 'programa', 'tamaño menor que 1', false, 'La poblacion hasta programa debe tener como minimo un digito'),
    Array('2', 'programa', 'tamaño mayor que 2', false, 'La poblacion hasta programa debe tener como maximo dos digitos'),
    Array('3', 'programa', 'tamaño = 2', true, 'Exito'),

    Array('1', 'programa', 'valor != "MESES" o "AÑOS"', false, 'solo puedes elegir los valores "MESES" "AÑOS"'),
    Array('2', 'programa', 'valor = "MESES" o "AÑOS"', true, 'Exito'),

    Array('1', 'programa', 'valor != "EVALUACIÓN", "INTERVENCIÓN" o "EVALUACIÓN E INTERVENCIÓN"', false, 'solo puedes elegir los valores "EVALUACIÓN", "INTERVENCIÓN" o "EVALUACIÓN E INTERVENCIÓN"'),
    Array('2', 'programa', 'valor = "EVALUACIÓN", "INTERVENCIÓN" o "EVALUACIÓN E INTERVENCIÓN"', true, 'Exito'),

    Array('1', 'programa', 'tamaño < 1', false, 'Debe por lo menos tener un caracter'),
    Array('2', 'programa', 'tamaño > 4', false, 'No puede tener mas de 4 caracteres'),
    Array('3', 'programa', 'tamaño >= 1 || tamaño <= 4', true, 'Exito'),

    Array('1', 'programa', 'tamaño menor que 100', false, 'Los requisitos del programa debe tener como minimo cien digitos'),
    Array('2', 'programa', 'tamaño mayor que 5000', false, 'Los requisitos del programa debe tener como maximo cinco mil digitos'),
    Array('3', 'programa', 'Algun caracter != Alfabetico con o sin acento, ñ, espacio ,signos de puntuacion o retornos de carro', false, 'El descrip interp del programa solo puede contener caracteres alfabeticos con acentos, ñ, espacios, signos de puntuacion y retornos de carro'),
    Array('4', 'programa', 'tamaño mayor o igual que 100 && tamaño menor o igual que 5000 && Alfabetico con o sin acento, ñ, espacio, signos de puntuacion o retornos de carro', true, 'Exito'),

    Array('1', 'programa', 'tamaño menor que 7', false, 'El fichero del programa debe tener como minimo siete digitos'),
    Array('2', 'programa', 'tamaño mayor que 60', false, 'El fichero del programa debe tener como maximo sesenta digitos'),
    Array('3', 'programa', 'Algun caracter != Alfabetico sin acentos ni ñ ni espacios', false, 'El fichero del programa solo puede contener caracteres alfabeticos sin acentos ni ñ ni espacios'),
    Array('4', 'programa', 'formato distinito de pdf, doc o docx', false, 'El formato del fichero es erroneo, debe der pdf, doc o docx'),
    Array('5', 'programa', 'tamaño del fichero es mas grande que 2000000 bytes', false, 'El fichero no puede ser mas grande que 2000000 bytes'),
    Array('6', 'programa', 'tamaño mayoro igual que 7 && tamaño menor o igual que 60 && Alfabetico sin acentos ni ñ ni espacios && formato igual a pdf, doc, docx && tamaño menor o igual a 2000000 bytes', true, 'Exito'),

    Array('1', 'programa', 'tamaño menor que 10', false, 'El enlace del programa debe tener como minimo diez digitos'),
    Array('2', 'programa', 'tamaño mayor que 100', false, 'El enlace del programa debe tener como maximo cien digitos'),
    Array('3', 'programa', 'Algun caracter != Alfabetico con ":", "/" o ".", sin acentos ni ñ ni espacios', false, 'El enlace del programa solo puede contener caracteres alfabeticos con ":", "/" o "."'),
    Array('4', 'programa', 'tamaño mayor o igual que 10 && tamaño menor o igual que 100 && Alfabetico con ":", "/" o ".", sin acentos ni ñ ni espacios', true, 'Exito'),

    Array('1', 'programa', 'valor != "PAPEL", "ELECTRÓNICO" o "PAPEL Y ELECTRÓNICO"', false, 'solo puedes elegir los valores "PAPEL", "ELECTRÓNICO" o "PAPEL Y ELECTRÓNICO E INTERVENCIÓN"'),
    Array('2', 'programa', 'valor = "PAPEL", "ELECTRÓNICO" o "PAPEL Y ELECTRÓNICO"', true, 'Exito'),

    Array('1', 'programa', 'valor != "PAPEL", "ELECTRÓNICO" o "PAPEL Y ELECTRÓNICO"', false, 'solo puedes elegir los valores "PAPEL", "ELECTRÓNICO" o "PAPEL Y ELECTRÓNICO E INTERVENCIÓN"'),
    Array('2', 'programa', 'valor = "PAPEL", "ELECTRÓNICO" o "PAPEL Y ELECTRÓNICO"', true, 'Exito'),

    Array('1', 'programa', 'valor != "INDIVIDUAL", "COLECTIVO" o "INDIVIDUAL Y COLECTIVO"', false, 'solo puedes elegir los valores "INDIVIDUAL", "COLECTIVO" o "INDIVIDUAL Y COLECTIVO"'),
    Array('2', 'programa', 'valor = "INDIVIDUAL", "COLECTIVO" o "INDIVIDUAL Y COLECTIVO"', true, 'Exito'),

    Array('1', 'programa', 'tamaño menor que 7', false, 'La imagen del programa debe tener como minimo siete digitos'),
    Array('2', 'programa', 'tamaño mayor que 60', false, 'La imagen del programa debe tener como maximo sesenta digitos'),
    Array('3', 'programa', 'Algun caracter != Alfabetico sin acentos ni ñ ni espacios', false, 'La imagen del programa solo puede contener caracteres alfabeticos sin acentos ni ñ ni espacios'),
    Array('4', 'programa', 'formato distinto de jpg o jpeg', false, 'El formato es erroneo, debe ser jpg o jpeg'),
    Array('5', 'programa', 'tamaño de la imagen es mas grande que 20000 bytes', false, 'El tamaño de la imagen es mas grande que 20000 bytes'),
    Array('6', 'programa', 'tamaño mayor o igual que 7 && tamaño menor o igual que 60 && Alfabetico sin acentos ni ñ ni espacios && formato igual a jpg o jpeg && tamaño igual o menor a 20000 bytes', true, 'Exito'),

    //publicacion
    Array('publicacion','id_publicacion', 1, 'tamaño menor que 1', false, 'El id de publicacoin debe tener como minimo un carater'),
    Array('publicacion','id_publicacion', 2, 'tamaño mayor que 6', false, 'El id de publicacion debe tener como maximo seis caracteres'),
    Array('publicacion','id_publicacion', 3, 'Algun caracter != digito', false, 'El id de publicacion solo puede contener digitos'),
    Array('publicacion','id_publicacion', 4, 'tamaño mayor o igual a 1 && tamaño menor o igual a 6 && digitos', true,),

    Array('publicacion','titulo_publicacion', 1, 'tamaño menor que 6', false, 'El titulo de publicacoin debe tener como minimo seis carateres'),
    Array('publicacion','titulo_publicacion', 2, 'tamaño mayor que 80', false, 'El titulo de publicacion debe tener como maximo ochenta caracteres'),
    Array('publicacion','titulo_publicacion', 3, 'Algun caracter != alfabeticos con acento, ñ o espacio', false, 'El titulo de publicacion solo puede contener caracteres alfabeticos con acento, ñ o espacio'),
    Array('publicacion','titulo_publicacion', 4, 'tamaño mayor o igual a 6 && tamaño menor o igual a 80 && alfabeticos con acento, ñ o espacio', true, 'Exito'),

    Array('publicacion','autor_publicacion', 1, 'tamaño menor que 6', false, 'El autor de publicacoin debe tener como minimo seis carateres'),
    Array('publicacion','autor_publicacion', 2, 'tamaño mayor que 40', false, 'El autor de publicacion debe tener como maximo cuarenta caracteres'),
    Array('publicacion','autor_publicacion', 3, 'Algun caracter != alfabeticos con acento, ñ o espacio', false, 'El autor de publicacion solo puede contener caracteres alfabeticos con acento, ñ o espacio'),
    Array('publicacion','autor_publicacion', 4, 'tamaño mayor o igual a 6 && tamaño menor o igual a 40 && alfabeticos con acento, ñ o espacio', true, 'Exito'),

    Array('publicacion','fecha_publicacion', 1, 'foramto de la fecha distinto de dd/mm/aaaa', false, 'Formato de fecha incorrecto, debe ser dd/mm/aaaa'),
    Array('publicacion','fecha_publicacion', 2, 'foramto de la fecha igual a dd/mm/aaaa', true, 'Exito'),

    Array('publicacion','area_publicacion', 1, 'tamaño menor que 1', false, 'El area de publicacoin debe tener como minimo un carater'),
    Array('publicacion','area_publicacion', 2, 'tamaño mayor que 6', false, 'El area de publicacion debe tener como maximo seis caracteres'),
    Array('publicacion','area_publicacion', 3, 'Algun caracter != digito', false, 'El area de publicacion solo puede contener digitos'),
    Array('publicacion','area_publicacion', 4, 'tamaño mayor o igual a 1 && tamaño menor o igual a 6 && digitos', true, 'Exito'),

    Array('publicacion','texto_publicacion', 1, 'tamaño menor que 30', false, 'El texto de publicacoin debe tener como minimo treinta carateres'),
    Array('publicacion','texto_publicacion', 2, 'tamaño mayor que 8000', false, 'El texto de publicacion debe tener como maximo ocho mil caracteres'),
    Array('publicacion','texto_publicacion', 3, 'Algun caracter != ascii', false, 'El texto de publicacion solo puede contener caracteres ascii'),
    Array('publicacion','texto_publicacion', 4, 'tamaño mayor o igual a 30 && tamaño menor o igual a 8000 && ascii', true, 'Exito'),

    Array('publicacion','imagen_publicacion', 1, 'tamaño menor que 7', false, 'La imagen de publicacoin debe tener como minimo siete carateres'),
    Array('publicacion','imagen_publicacion', 2, 'tamaño mayor que 50', false, 'La imagen de publicacion debe tener como maximo cincuenta caracteres'),
    Array('publicacion','imagen_publicacion', 3, 'Algun caracter != alfabeticos sin acentos ni ñ ni espacios', false, 'El id de publicacion solo puede contener caracteres alfabeticos sin acentos ni ñ ni espacios'),
    Array('publicacion','imagen_publicacion', 4, 'tamaño mayor o igual a 7 && tamaño menor o igual a 50 && alfabeticos sin acentos ni ñ ni espacios', true, 'Exito')

);
