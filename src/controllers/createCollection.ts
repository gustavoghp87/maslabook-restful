// Toma el arreglo "words" de palabras buscadas, las desprende de acentos y diéresis,
//  las pasa a minúsculas, y genera el array "coleccion" que contiene todas las combinaciones
//  posibles de acentos ortográficos

export const createCollection = (words:[string]) => {

  console.log("Función crearColeccion", words)

  if (words.length>7) return [ {post: new RegExp ("idiota", "i")} ]

  let coleccion:any = []

  words.forEach(element => {
    let una = element.toLowerCase()
    if (una.indexOf('á')!=-1) {
      let posi = una.indexOf('á')
      una = una.substring(0, posi) + "a" + una.substring(posi+1, una.length)
    }
    if (una.indexOf('é')!=-1) {
      let posi = una.indexOf('é')
      una = una.substring(0, posi) + "e" + una.substring(posi+1, una.length)
    }
    if (una.indexOf('í')!=-1) {
      let posi = una.indexOf('í')
      una = una.substring(0, posi) + "i" + una.substring(posi+1, una.length)
    }
    if (una.indexOf('ó')!=-1) {
      let posi = una.indexOf('ó')
      una = una.substring(0, posi) + "o" + una.substring(posi+1, una.length)
    }
    if (una.indexOf('ú')!=-1) {
      let posi = una.indexOf('ú')
      una = una.substring(0, posi) + "u" + una.substring(posi+1, una.length)
    }
    if (una.indexOf('ü')!=-1) {
      let posi = una.indexOf('ü')
      una = una.substring(0, posi) + "u" + una.substring(posi+1, una.length)
    }

    let palabra = [ {post: new RegExp( una, 'i')} ]
    console.log(palabra, "palabra");
    

    ///////////////////////////////////////////////////////////////////////////////

    if (una.indexOf('a') != -1) {
      //dos = una.replace("a", "á")
      let letras:any = []
      for (let i=0; i<una.length; i++) {
        if (una[i]=="a") {
          letras.push(i)
        }
      }
      if (letras.length > 0) {
        letras.forEach((element:any) => {
          const dos = una.substring(0, element) + "á" + una.substring(element+1, una.length)
          palabra.push({ 'post': new RegExp( dos, 'i') })
        })
      }
    }

    if (una.indexOf('e') != -1) {
      //dos = una.replace("a", "á")
      let letras:any = []
      for (let i=0; i<una.length; i++) {
        if (una[i]=="e") {
          letras.push(i)
        }
      }
      if (letras.length > 0) {
        letras.forEach((element:any) => {
          const dos = una.substring(0, element) + "é" + una.substring(element+1, una.length)
          palabra.push({ 'post': new RegExp( dos, 'i') })
        })
      }
    }

    if (una.indexOf('i') != -1) {
      //dos = una.replace("a", "á")
      let letras:any = []
      for (let i=0; i<una.length; i++) {
        if (una[i]=="i") {
          letras.push(i)
        }
      }
      if (letras.length > 0) {
        letras.forEach((element:any) => {
          const dos = una.substring(0, element) + "í" + una.substring(element+1, una.length)
          palabra.push({ 'post': new RegExp( dos, 'i') })    
        })
      }
    }

    if (una.indexOf('o') != -1) {
      //dos = una.replace("a", "á")
      let letras:any = []
      for (let i=0; i<una.length; i++) {
        if (una[i]=="o") {
          letras.push(i)
        }
      }
      if (letras.length > 0) {
        letras.forEach((element:any) => {
          const dos = una.substring(0, element) + "ó" + una.substring(element+1, una.length)
          palabra.push({ 'post': new RegExp( dos, 'i') })    
        })
      }
    }

    if (una.indexOf('u') != -1) {
      //dos = una.replace("a", "á")
      let letras:any = []
      for (let i=0; i<una.length; i++) {
        if (una[i]=="u") {
          letras.push(i)
        }
      }
      if (letras.length > 0) {
        letras.forEach((element:any) => {
          const dos = una.substring(0, element) + "ú" + una.substring(element+1, una.length)
          palabra.push({ 'post': new RegExp( dos, 'i') })    
        })
      }
    }

    if (una.indexOf('u') != -1) {
      //dos = una.replace("a", "á")
      let letras:any = []
      for (let i=0; i<una.length; i++) {
        if (una[i]=="u") {
          letras.push(i)
        }
      }
      if (letras.length > 0) {
        letras.forEach((element:any) => {
          const dos = una.substring(0, element) + "ü" + una.substring(element+1, una.length)
          palabra.push({ 'post': new RegExp( dos, 'i') })    
        })
      }
    }
    
    coleccion.push(palabra)
  })

  for (let i=0; i<7; i++) {
    if (!coleccion[i]) coleccion[i] = [{post: new RegExp( "", 'i') }]
  }

  console.log("COLECCION:", coleccion)

  return coleccion
}
