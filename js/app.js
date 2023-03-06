//Constantes de elementos del svg

const region1 = document.querySelector('#CL-TA');
const region2 = document.querySelector('#CL-AN');
const region3 = document.querySelector('#CL-AT');
const region4 = document.querySelector('#CL-CO');
const regionRM = document.querySelector('#CL-RM');
const region5 = document.querySelector('#CL-VS');
const region6 = document.querySelector('#CL-LI');
const region7 = document.querySelector('#CL-ML');
const region8 = document.querySelector('#CL-BI');
const region9 = document.querySelector('#CL-AR');
const region10 = document.querySelector('#CL-LL');
const region11 = document.querySelector('#CL-AI');
const region12 = document.querySelector('#CL-MA');
const region13 = document.querySelector('#CL-AP');
const region14 = document.querySelector('#CL-NU');
const region15 = document.querySelector('#CL-LR');

//Variables Globales
let fileSelect; 
let selectvalor;
let valTuristico;


//variables elementos de la card
const card = document.querySelector('.card');
const img = document.querySelector('.card-img-top');
const titulo = document.querySelector('.card-title');
const turistico = document.querySelector('#turistico');
//const textEvento = document.querySelector('#evento__text');
//const turistico = document.querySelectorAll('#turistico-group .list-group-item');

//variables del formulario
const selector = document.querySelector('#region');
const archivo = document.querySelector('#fileInput');
const cambiar = document.querySelector('#btn__cambiar');


let regions = [ {
    img: '/img/RM.jpg',
    nombre: "Region Metropolitana",
    turistico: "*Cerro santa Lucia\n*Costanera Center\n*Cerro Colorado\n*Centro cultural Gabriela Mistral",

},
{
    img: '/img/reg1.jpg',
    nombre: "Tarapaca",
    turistico: "*Cerro Dragon\n*Oficina Salitrera de Humbersonte\n*Playa Cavancha\n*Zofri",

},
{
    img: '/img/reg2.jpg',
    nombre: "Antofagasta",
    turistico: "*La portada\n*La mano del desierto\n*San pedro de Atacama\n*Salar de Atacama\n*Laguna cejar",

},
{
    img: '/img/reg3.jpg',
    nombre: "Atacama",
    turistico: "*Bahía Inglesa\n*Nevado Ojos del salado\n*Parque nacional pan de azucar\n* Parque Nacional nevado tres cruces.",

},
{
    img: '/img/reg4.jpg',
    nombre: "Coquimbo",
    turistico: "*Cruz del tercer Milenio\n*Valle del Elqui\n*Playa Guanaqueros \n*Playa la Herradura.",

},
{
    img: '/img/reg5.jpg',
    nombre: "Valparaiso",
    turistico: "*Cerros de Valparaiso\n*Parque nacional la campana\n*Quinta vergara\n*Maitencillo\n*Isla de Rapa Nui",

},
{
    img: '/img/reg6.jpg',
    nombre: "Libertador General Bernardo O'Higgins",
    turistico: "*Parque zafari Chile\n*Viña santa cruz\n*Museo Colchagua.",

},
{
    img: '/img/reg7.jpg',
    nombre: "Maule",
    turistico: "*Paque Radal siete tazas\n*Reserva nacional Altos de Lircay\n*Lago Colbún.",
 
},
{
    img: '/img/reg8.jpg',
    nombre: "Bio-Bio",
    turistico: "*Saltos del Laja\n*Parque ecuador\n*Monitor Huascar.",
   
},
{
    img: '/img/reg9.jpg',
    nombre: "Araucania",
    turistico: "*Parque Ojos del Caburga\n*Pucon\n*Lago Villa Rica.",

},
{
    img: '/img/reg10.jpg',
    nombre: "Los Lagos",
    turistico: "*Puerto Varas\n*Cochamó\n*Caleta Angelmó\n*Isla grande de Chiloé",

},
{
    img: '/img/reg11.jpg',
    nombre: "Aysén",
    turistico: "*Catedrales de Marmol\n*Paque Nacional laguna san Rafael\n*Cerro Castillo\n*Reserva nacional Coyhaique\n*Ventisquero colgante",

},
{
    img: '/img/reg12.jpg',
    nombre: "Magallanes",
    turistico: "*Parque nacional torres del paine\n*Museo Nao Victoria\n*Cementerio Municipal Sara Braun",
 
},
{
    img: '/img/reg13.jpg',
    nombre: "Arica y Parinacota",
    turistico: "*Morro de Arica\n* Playa chinchorro\n*Paque nacional Lauca",

},
{
    img: '/img/reg14.jpg',
    nombre: "Ñuble",
    turistico: "*plaza de armas de Chillán\n*Nevados de Chillán\n*Parque Lantaño",
 
},
{
    img: '/img/reg15.jpg',
    nombre: "Los Rios",
    turistico: "*Parque FLuvial de Valdivia\n*Parque Oncol\n*Sistema de fuertes de Valdivia",

},];



//otra forma de manejar los eventos desde js

/*region1.onmouseover = () =>{

    img.src = regions[1].img;
    titulo.textContent = regions[1].nombre;
    card.classList.remove('d-none');
    card.classList.add('d-block');

}*/


//Eventos
cargarEventos();

function cargarEventos(){

   region1.addEventListener('mouseover', ()=>{
     
        insertarData(1);
        selectvalor = 1;

    });
    //region1.addEventListener('mouseleave', removerCard);

    region2.addEventListener('mouseover', ()=>{
        insertarData(2);
        selectvalor = 2;
    });
   //region2.addEventListener('mouseleave', removerCard);

    region3.addEventListener('mouseover', ()=>{
        insertarData(3);
        selectvalor = 3;
    } );
    //region3.addEventListener('mouseleave', removerCard);

    region4.addEventListener('mouseover', ()=>{
        insertarData(4)
        selectvalor = 4;
    });
    //region4.addEventListener('mouseleave', removerCard);

    region5.addEventListener('mouseover', ()=>{
        insertarData(5)
        selectvalor = 5;
    });
    //region5.addEventListener('mouseleave', removerCard);

    region6.addEventListener('mouseover', ()=>{
        insertarData(6);
        selectvalor = 6;
    });
   // region6.addEventListener('mouseleave', removerCard);

    region7.addEventListener('mouseover', ()=>{
        insertarData(7)
        selectvalor = 7;
    });
    //region7.addEventListener('mouseleave', removerCard);

    region8.addEventListener('mouseover', ()=> {
        insertarData(8)
        selectvalor = 8;
    });
   // region8.addEventListener('mouseleave', removerCard);

    region9.addEventListener('mouseover', ()=>{
        insertarData(9)
        selectvalor = 9;
    });
   // region9.addEventListener('mouseleave', removerCard);

    region10.addEventListener('mouseover', ()=>{
        insertarData(10)
        selectvalor = 10;
    });
    //region10.addEventListener('mouseleave', removerCard);

    region11.addEventListener('mouseover', ()=>{
        insertarData(11)
        selectvalor = 11;
    });
   // region11.addEventListener('mouseleave', removerCard);

    region12.addEventListener('mouseover', ()=>{
       insertarData(12)
       selectvalor = 12;
    });
   // region12.addEventListener('mouseleave', removerCard);

    region13.addEventListener('mouseover', ()=>{
        insertarData(13)
        selectvalor = 13;
    });
    //region13.addEventListener('mouseleave', removerCard);

    region14.addEventListener('mouseover', ()=>{
        insertarData(14)
        selectvalor = 14;
    });
    //region14.addEventListener('mouseleave', removerCard);

    region15.addEventListener('mouseover', ()=>{
        insertarData(15)
        selectvalor = 15;
    });
    ///region15.addEventListener('mouseleave', removerCard);

    regionRM.addEventListener('mouseover', ()=>{
        insertarData(0)
        selectvalor = 0;
    });
    //regionRM.addEventListener('mouseleave', removerCard);

    //evento de llenado del select
   /*document.addEventListener('DOMContentLoaded', ()=>{

        llenarSelect(regions);
  
      });*/
    
    archivo.addEventListener('change', ()=>{
        
        fileSelect =  archivo.files[0].name; 
        console.log(fileSelect);

    } );

   /* selector.addEventListener('click', ()=>{
        
        //toma el valor de data id 
        //console.log(selector.options);
        //console.log(selector.options[selector.selectedIndex]);
        selectvalor = selector.options[selector.selectedIndex].getAttribute('data-id');
        //console.log(selectvalor);
    });*/
   

    cambiar.addEventListener('click', ()=>{

        //validarFormulario();
        valTuristico = turistico.value;
        cambiarValCard(fileSelect,selectvalor,valTuristico);

    });

    /*textEvento.addEventListener('click', () => {

        console.log('hola mundo');
    })*/
}

//funciones

function llenarSelect(regiones){

    regiones.forEach(function(region, indice){

        let opcion = document.createElement('option');
        opcion.dataset.id = indice;
        opcion.value = region.nombre;
        opcion.textContent = region.nombre;
        //selector.appendChild(opcion);
        //console.log(opcion);

    })

}




function removerCard(){

    card.classList.add('d-none');
    card.classList.remove('d-block');

}

//inserta los datos dentro de la card y los muestra
function insertarData (numRegion){

    //inserta la data
    regions.forEach(function(region, indice){

        if(numRegion === indice){

                img.src = region.img;
                titulo.value = region.nombre;
                turistico.value = region.turistico;

               /* turistico.forEach(function(item, indiceT){
                    
                    console.log(region.turistico);
                   

                });*/

                return;
        }

    });

    //Muestra la card
    card.classList.remove('d-none');
    card.classList.add('d-block');

}

function cambiarValCard(filename, valorSelect, valorTuristico){

    //nuevos valores
    console.log(`funcion cambiar val ${valorSelect}`);
    let nuevoPath = `/newImg/${filename}`;

    
    //cambio del valor del objeto
    regions.forEach(function(region, indice){

        if(parseInt(valorSelect) === indice){
            region.img = nuevoPath;
            region.turistico  = valorTuristico;
            console.log(region);
            insertarData(selectvalor);
            return;
        }
    });

}

