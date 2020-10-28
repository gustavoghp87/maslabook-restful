// Toma el arreglo "words" de palabras buscadas, las desprende de acentos y diéresis,
//  las pasa a minúsculas, y genera el array "coleccion" que contiene todas las combinaciones
//  posibles de acentos ortográficos

export const createCollection = (words:[string]) => {

  console.log("Función crearColeccion", words)
  if (words.length>7) return [ {post: new RegExp ("idiota", "i")} ]

  let coleccion:any = []

  words.forEach(element => {
    let una = element.toLowerCase()
    while (una.indexOf('á')!==-1) una = una.replace('á', 'a')
    while (una.indexOf('é')!==-1) una = una.replace('é', 'e')
    while (una.indexOf('í')!==-1) una = una.replace('í', 'i')
    while (una.indexOf('ó')!==-1) una = una.replace('ó', 'o')
    while (una.indexOf('ú')!==-1) una = una.replace('ú', 'u')
    while (una.indexOf('ü')!==-1) una = una.replace('ü', 'u')
    
    let palabra = [ {post: new RegExp( una, 'i')} ]
    console.log("palabra", palabra)

    ///////////////////////////////////////////////////////////////////////////////

    const opc = [{l:'a', c:'á'}, {l:'e', c:'é'}, {l:'i', c:'í'}, {l:'o', c:'ó'}, {l:'u', c:'ú'}, {l:'u', c:'ü'}]

    opc.forEach((change:any) => {
      if (una.indexOf(change.l) !== -1) {
        let letras:number[] = []
        for (let i=0; i<una.length; i++) if (una[i]===change.l) letras.push(i)
        if (letras.length) letras.forEach((element:number) => {
          const dos = una.substring(0, element) + change.c + una.substring(element+1, una.length)
          palabra.push({ 'post': new RegExp( dos, 'i') })
        })
      }
    })
    
    coleccion.push(palabra)
  })

  for (let i=0; i<7; i++) {
    if (!coleccion[i]) coleccion[i] = [{post: new RegExp( "", 'i') }]
  }

  console.log("COLECCION:", coleccion)

  return coleccion
}
