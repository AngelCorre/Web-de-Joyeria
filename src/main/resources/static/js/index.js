

// Call the dataTables jQuery plugin
//SE EJECUTA CUALQUIER METODO QUE ESTE DENTRO AL INICIAR LA PAGINA QUE LLAMA A ESTE JS
// $(document).ready(function() {

//    cargarEncuesta();
//    $('#satisfaccion_p').DataTable();

// });

window.addEventListener('load', () => {

  cargarEncuesta();
  
});

async function cargarEncuesta() {
  
  const request = await fetch('api/encuestas', { // HACEMOS LA PETICION A LA URL 'api/usuarios', BUSCARA EN NUESTRA CLASE Usuario.java ESA URL Y EJECUTARA EL METODO QUE TENGA ESA URL Y EL MISMO REQUEST METHOD
    method: 'GET', // REQUEST METHOD POST QUE SIRVE PARA OBTENER DATOS
    //LOS HEADERS NOS AYUDAN A CONVERTIR LOS DATOS A JSON
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  
  const encuestas = await request.json();

    console.log(encuestas);

  let listEncuesta = 0;
  
  // for (let i = 0; i < encuestas.length; i++) {
  //   let encuesta = encuestas[i];
  
  //   alert(encuesta);
  //   let encuestaHTML = encuesta.satisfaccion;
  //   listEncuesta = listEncuesta + parseInt(encuestaHTML);
  
  // }
  
  for(let encuesta of encuestas) {

    let encuestaHTML = encuesta.satisfaccion;
    
    listEncuesta = listEncuesta + parseFloat(encuestaHTML);
    
  }
  
  // let listadoHTML = "";

  let promedio = 0;
  
  console.log(encuestas.lenght);
  console.log(listEncuesta);

  promedio = (listEncuesta / encuestas.length);
  
  document.getElementById('satisfaccion_p').innerHTML = "Satisfacción: " + promedio.toFixed(1);
  // document.querySelector("#satisfaccion_p tbody").outerHTML = listEncuesta;
  
} // TERMINA FUNCION CARGAR


// FUNCION FETCH LLAMADA registrarUsuario y la cual se manda llamar en un OnClick de HTML
async function registrarUsuario() {
  
  try {
    
    let calidad = document.querySelector('input[name="grupo_1"]:checked').value;
    let variedad = document.querySelector('input[name="grupo_2"]:checked').value;
    let relacion = document.querySelector('input[name="grupo_3"]:checked').value;
    let proceso = document.querySelector('input[name="grupo_4"]:checked').value;
    let atencion = document.querySelector('input[name="grupo_5"]:checked').value;
    let experiencia = document.querySelector('input[name="grupo_6"]:checked').value;
    let limpieza = document.querySelector('input[name="grupo_7"]:checked').value;
    let accesibilidad = document.querySelector('input[name="grupo_8"]:checked').value;

    let suma = {};

    suma.satisfaccion = parseFloat(calidad) + parseFloat(variedad) + parseFloat(relacion) + parseFloat(proceso) + parseFloat(atencion) +
            parseFloat(experiencia) + parseFloat(limpieza) + parseFloat(accesibilidad);


    const request = await fetch('api/encuestas', { // HACEMOS LA PETICION A LA URL 'api/usuarios', BUSCARA EN NUESTRA CLASE Usuario.java ESA URL Y EJECUTARA EL METODO QUE TENGA ESA URL Y EL MISMO REQUEST METHOD
      method: 'POST', // REQUEST METHOD POST QUE SIRVE PARA ENVIAR DATOS
      
      //LOS HEADERS NOS AYUDAN A CONVERTIR LOS DATOS A JSON
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(suma) // no se
    });

    alert("!La encuesta ha sido enviada!");

    location.reload();
    
  } catch (error) {
    
    alert("¡Califica todas las secciones!");
    console.log(error);
    
  }
  
  
}

// document.getElementById('limpiar').addEventListener('click', () => 
function limpiar(){
  
  btnLimpiar('grupo_1');
  btnLimpiar('grupo_2');
  btnLimpiar('grupo_3');
  btnLimpiar('grupo_4');
  btnLimpiar('grupo_5');
  btnLimpiar('grupo_6');
  btnLimpiar('grupo_7');
  btnLimpiar('grupo_8');
  
}

function btnLimpiar(grupo) {
  
  let Ngrupo = document.getElementsByName(grupo);
  
  for (let i = 0; i < Ngrupo.length; i++) {
    let element = Ngrupo[i];
    
    element.checked = false;
    
    
  }
  
}

