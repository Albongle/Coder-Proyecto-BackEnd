import { carrito, CARRITO_PRODUCTOS, CONTAINER_ANUNCIOS, CONTAINER_CARRITO, GESTOR_ACCION, productos, TIEMPO_RESPUESTA, TIEMPO_RESPUESTA_PORTADA} from "./globales.js";
import { addAnuncio,notAnuncio, createRangoDePrecios, createFiltroTipo, deleteCarrito, getProductoForm,showCarrito} from "./funciones.js";
import { leeDelStorage } from "./storage.js";
import spinner from "./spinner.js";
const socket = io();

let imgPortada=1;

socket.on("refresh-productos",(data)=>{
  productos.splice(0, productos.length, ...data)
  addAnuncio(CONTAINER_ANUNCIOS, productos);


});

$("document").ready(()=> {
    $.get("/api/productos") // uso el metodo get de JQuery
    .done(async (datos) => {
      spinner.removeSpinner(document.querySelector(".spinner"),document.querySelector(".img-spinner"));
      datos.forEach(p=>{
        productos.push({...p}); // pusheo los datos de la api al array
      });
      addAnuncio(CONTAINER_ANUNCIOS, productos);//agrego la vista de anuncios al DOM
      createRangoDePrecios(productos); //creo el rango de precio en base a los datos obtenidos desde la api
      createFiltroTipo(productos); //creo el filtro de tipo en base a los datos obtenidos desde la api
      
      $("#rango-precio").on("change click",handlerFiltrarPrecio); //agrego manejador al filtro de precio
      $(".check-tipo").on("click",handlerFiltrarTipo);//agrego manejador al filtro de tipo
      $("#txt-buscar").on("change keyup paste",handlerBuscar);//agrego manejador al txt para poder buscar por nombre
      $("#oferta").fadeIn(TIEMPO_RESPUESTA_PORTADA,handlerOferta);

      
      
      let storage = leeDelStorage("productos"); //leo el storage
      if(storage){
        carrito.productos.push(...storage.productos);
        showCarrito(CARRITO_PRODUCTOS,carrito.productos);
      }else{
        let res = await $.post("/api/carrito");
        carrito.idCarrito = res.idCarrito;
      }

      $("#btn-cierra-carrito").on("click",handlerCierraCarrito);//agrego manejador al btn para cerrar la vista del carrito
      $("#btn-abre-carrito").on("click",handlerAbreCarrito);//agrego manejador a la foto del carrito para abrirlo
      $("#btn-enviar-carrito").on("click", handlerEnviarCarrito);//agrego manejador al boton del carrito para hacerl el envio a la BD
      $("#btn-cierra-dialogo-venta").on("click",handlerCerrarDialogoVenta);//agrego manejador al boton parar cerrar el dialogo
      $("#btn-cierra-dialogo-gestor").on("click",handlerCerrarDialogoGestor);//agrego manejador al boton parar cerrar el dialogo
      $("#btn-add-producto").on("click", handlerAddProducto);
      $("#btn-send-producto").on("click", handlerSendProducto);
    })
    .fail((error) => {
      console.error(error);
    });
    
});

function handlerEnviarCarrito(){
  if(carrito.productos.length>0){
    if(confirm("Desea procesar la compra?")){
      $(CONTAINER_CARRITO).hide(TIEMPO_RESPUESTA,()=>{
        $.ajax({
          type: "DELETE",
          url: `/api/carrito/${carrito.idCarrito}`,
          success: function (response) {
            if(response.status == "ok"){
              deleteCarrito();
              $("#dialogo-venta").show(TIEMPO_RESPUESTA,()=>{
                $("#dialogo-venta").attr("open","true");
              });
            }
            else{
              throw Error ("No se pudo procesar la compra");
            }
          }
        });
      });
    }
  }
}


function handlerOferta() {

  imgPortada++;
  $("#oferta").fadeOut(TIEMPO_RESPUESTA_PORTADA,()=>{
    if(imgPortada>3){
      imgPortada = 1;
    }
    $("#oferta-img").attr("src", `./assets/img/portada${imgPortada}.png`);
  });
  $("#oferta").fadeIn(TIEMPO_RESPUESTA_PORTADA,handlerOferta);
}

function handlerBuscar(event) {
    let expresion = `${this.value}`;
    CONTAINER_ANUNCIOS.fadeOut(TIEMPO_RESPUESTA,()=>{
      let filtro = productos.filter(element=>element.marca.toLowerCase().includes(expresion.toLowerCase()));
      if(filtro.length === 0){
        notAnuncio(CONTAINER_ANUNCIOS);
      }else{
        addAnuncio(CONTAINER_ANUNCIOS,filtro);
      } 
      CONTAINER_ANUNCIOS.fadeIn(TIEMPO_RESPUESTA);
    });
    

}

function handlerFiltrarPrecio(event) {

  CONTAINER_ANUNCIOS.fadeOut(TIEMPO_RESPUESTA,()=>{
    let filtro = productos.filter(element=>element.precio >= parseInt(this.value));
    addAnuncio(CONTAINER_ANUNCIOS,filtro); 
    CONTAINER_ANUNCIOS.fadeIn(TIEMPO_RESPUESTA);
  })
  
}

function handlerCierraCarrito(event) {

  CONTAINER_CARRITO.slideUp(TIEMPO_RESPUESTA);
}
function handlerAbreCarrito(event) {
  CONTAINER_CARRITO.fadeIn(TIEMPO_RESPUESTA);
  
}


function handlerFiltrarTipo(event) {
  let filtro =[];
  CONTAINER_ANUNCIOS.fadeOut(TIEMPO_RESPUESTA,()=> {
    for (const item of $(".check-tipo")) {
      if(item.checked){
        filtro.push(...productos.filter(element=> element.tipo === item.value));
      }
    }
    if(filtro.length === 0){
      addAnuncio(CONTAINER_ANUNCIOS,productos);
    }else{
      addAnuncio(CONTAINER_ANUNCIOS,filtro);
    }
    CONTAINER_ANUNCIOS.fadeIn(TIEMPO_RESPUESTA);
  });

    
}

function handlerCerrarDialogoVenta(){
  $("#dialogo-venta").fadeOut(TIEMPO_RESPUESTA,()=>{
    $("#dialogo-venta").removeAttr("open");
  });
}

function handlerCerrarDialogoGestor(){
  $("#dialogo-gestor").fadeOut(TIEMPO_RESPUESTA,()=>{
    $("#dialogo-gestor").removeAttr("open");
  });
}


function handlerAddProducto(){
  GESTOR_ACCION.val("nuevo");
  $("[name=desc]").val("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!");
  $("#dialogo-gestor").show(TIEMPO_RESPUESTA,()=>{
    $("#dialogo-gestor").attr("open","true");
  });
}

function handlerSendProducto (e){
  e.preventDefault();
  let productoNuevo = getProductoForm();
  if(GESTOR_ACCION.val()==="nuevo"){
    $.post("/api/productos", productoNuevo)
    .done(()=>{
      handlerCerrarDialogoGestor();
    })
    .fail(error=> alert("Error al momento del alta"));
  }else{
    let id=parseInt($("#id-producto").val());
    if(confirm(`Confirma la edicion del producto con id ${id }`)){
      productoNuevo.id = id;
      $.ajax({
        type: "PUT",
        url: `/api/productos/${id}`,
        data: productoNuevo,
        success: function (response) {
          handlerCerrarDialogoGestor();
          alert(`Producto con id ${response.id} modificado`);
        }
      });
    }
  }
}

