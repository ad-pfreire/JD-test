export const departing = {  // ESTOS SON !!!OBJETOS!!
    id:'#departing',

}

export const returning = {
    id:'#returning',
    
}

export const options = {
    july: 'July',//. clave:valor...key:value
    december: 'December',
    julyny: 'July (next year)',
    decemberny: 'December (next year)',
    julytwoyears: 'July (two years from now)',
    decembertwoyears: 'December (two years from now)',
}

export const buttons = {
    buttonsearch: "[value='Search']", // AQUI YO TENGO QUE FORMAR MI .. ID, MI CLASE O MI XPATH!!!!!!!!!!!
}

export const promocode = {
    id: '#promotional_code',
}



/// ANOTACIONES

// Reglas (extraídas del enunciado)

// Solo hay vuelos en Julio y Diciembre (ida y vuelta).

// Se pueden buscar viajes hasta los próximos 2 años.

// La vuelta debe ser ≥ 1 año después de la salida. Si es < 1 año, debe salir:
// “Unfortunately, this schedule is not possible. Please try again.”               !!!!!!!!!!!!!!!!!!!!!!

//------------------------

// Qué debes permitir / bloquear
//----------------------------- Válidos (ejemplos)

// July → July (next year), December (next year), July (two years), December (two years)

// December → December (next year), July (two years), December (two years)

// July (next year) → July (two years), December (two years)

// December (next year) → December (two years)

//----------------------------- Inválidos (deben disparar el mensaje de la Story #4)

// Toda vuelta del mismo año que la salida (p. ej., July → December = 5 meses)

// Vuelta antes de cumplir 12 meses (p. ej., December → July (next year) = 7 meses)

// Cualquier combinación donde Depart = July/December (two years) (no hay retorno ≥ 1 año en el menú)