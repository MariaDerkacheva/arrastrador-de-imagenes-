let drop = document.getElementById('contenido');
let contenido_arrastrado;


drop.addEventListener('dragover', (e) => {
  e.preventDefault()
  console.log('encima')
});

drop.addEventListener('drop', (e) => {
  e.preventDefault()
  console.log('soltar')
  
  // dataTransfer => es el centro de desarrollo de toda la actividad de la función DnD,
  //contiene los datos que se envían en la acción de arrastre
  contenido_arrastrado = e.dataTransfer.files; //tiene el acceso al contenido arrastrado

  //con este for se determina la cantidad de contenido arrastrado al objeto contenido_arrastrado
  for (let j = 0; j < contenido_arrastrado.length; j++) {
    console.log('lo que tiene img ', contenido_arrastrado)

    // contenido_arrastrado es un objeto, con el for se busca la imagen en si y pasa por el for dependiendo 
    //de la cantidad de img.length
    for (i = 0; i = contenido_arrastrado[i + j]; i++) {
      //console.log('Entramos a for')
      let img = i;
      //type => tipo (true / folse) match() => buscador de palabras dentro del objeto,
      // en este caso debe buscar algo que se llame 'image'
      if (!img.type.match('image.*')) {
        continue;
      }
      //FileReader()=> permite que las aplicaciones web lean info almacenados en el cliente de forma 
      //asíncrona, usando los objetos File o Blob dependiendo de los datos que se pretenden leer.
      var reader = new FileReader();

      //comienza a captura el archivo
      //onload => es un evento que ejecuta una funcion tan pronto como una página haya cargado
        reader.onload = (function (img) {
        return function (direccion) {
         //llamo una funcion que va mostrar la imagen 
        crea_contenido(img , direccion);

        };
      })(img);
      //le el archivo como una URL
      reader.readAsDataURL(img);
    }
  }
});

function fondonuevo(vt) {
  var files = vt.target.files
  // file=> es un objeto,provee información acerca de los archivos y permite
  // que el código JS en una página web tenga acceso a su contenido
  
  for(var i = 0; f = files[i]; i++) {
   
    if(!f.type.match('image.*')) {
      continue;
    }
    var reader = new FileReader();
    reader.onload = (function (theFile) {
      return function (e) {
        //llamo una funcion que va mostrar la imagen
        crea_contenido(theFile , e)
      };
    })(f);
    reader.readAsDataURL(f);
  }
};

function crea_contenido(img , direccion) {
  var span = document.createElement('span');                     //escape(img.name)=>crea una nueva cadena de caracteres que sera el titulo de la img
  span.innerHTML = ['<img class="imagen" src="', direccion.target.result, '" title="', escape(img.name), '"/>'].join('');
  document.getElementById('list').insertBefore(span, null); //se agrega un nuevo hijo al final ya que dice null
};


document.getElementById('a').addEventListener('change', fondonuevo, false);