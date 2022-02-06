import { productos, carrito, CONTAINER_CARRITO, TIEMPO_RESPUESTA, GESTOR_ACCION } from "./globales.js";
import { guardarEnStorage, limpiarStorage } from "./storage.js";

export const addAnuncio = (contenedor, elementos) => {

  contenedor.empty();
  elementos.forEach((element) => {
    $(contenedor).append(`
            <article class="anuncios__anuncio">
                <img src="${element.urlImg}" class="anuncio__img" alt="telefono"></img>
                <div class="anuncio__detalle">
                    <p>${element.marca} - ${element.nombre}</p>
                    <p class="detalle__precio">$${parseInt(element.precio).toLocaleString()}</p>
                    <p class="detalle__cuotas">Hasta ${element.cuotas} sin interés</p>
                    <p class="detalle__descripcion">${element.desc}</p>                    
                </div>
                <button id="btn-compra-${element.id}" value="${element.id}" type="button" class="anuncio__btn btn-comprar">Comprar</button>
                <button id="btn-modificar-${element.id}" value="${element.id}" type="button" class="anuncio__btn btn-modificar">Modificar</button>
                <button id="btn-eliminar-${element.id}" value="${element.id}" type="button" class="anuncio__btn btn-eliminar">Eliminar</button>
            </article>
    `);
  });

  $(".btn-comprar").on("click", handlerComprarProducto);
  $(".btn-modificar").on("click", handlerModificarProducto);
  $(".btn-eliminar").on("click", handlerEliminarProducto);
};

export const notAnuncio = (contenedor) => {
  contenedor.empty();
    $(contenedor).append(`
            <article class="anuncios__anuncio-not">
                <img src="./assets/img/notfind.png" class="anuncio__img" alt="telefono"></img>
                <div class="anuncio__detalle">
                  <p class="detalle__descripcion">No se encontraron coincidencias!!!</p>                    
                </div>
            </article>
    `);
};

function handlerComprarProducto() {
  let comprado = productos.find((element) => element.id === parseInt(this.value));
  addElementCarrito($("#carrito-productos"),comprado);
}
function handlerModificarProducto(){
  GESTOR_ACCION.val("modificar");
  let id= parseInt(this.value);
  $("#id-producto").val(id);
  let objeto = productos.find(element=> element.id === id);
  setProductoForm(objeto);
  $("#dialogo-gestor").show(TIEMPO_RESPUESTA,()=>{
    $("#dialogo-gestor").attr("open","true");
  });

}


function handlerEliminarProducto(){
  let id= parseInt(this.value);
  if(confirm(`Confirma la eliminacion del producto ${id}`)){
    $.ajax({
      type: "DELETE",
      url: `/api/productos/${id}`,
      success: function (response) {
        alert(response.message);
      }
    });
  }
}


export const addElementCarrito = (contenedor, producto) => {
  
  if (!carrito.productos.find(element => element.id === producto.id)) {

    carrito.productos.push(producto);
    $.post(`/api/carrito/${carrito.idCarrito}/productos`,producto);

    guardarEnStorage("productos",carrito);
  }
  
  showCarrito(contenedor,carrito.productos);
};

export const deleteCarrito=()=>{
  carrito.productos.splice(0,carrito.productos.length);
  renderizarCarrito();
  limpiarStorage("productos");
  
}


export const showCarrito = (contenedor,productos)=>{
  contenedor.empty();
  if(productos.length===0){
    $(contenedor).append(`<article class="productos__producto">                         
                              <div class="producto__detalle">
                                <p class="detalle__marca">El Carrito esta vacio</p>
                              </div>
                          </article>`);
  }
  else{
    productos.forEach(producto=>{

      $(contenedor).append(`<article class="productos__producto">
                                <button class="btn-quitar" id="btn-quitar-${producto.id}" value="${producto.id}"><i class="fa fa-trash" aria-hidden="true" class"btn-quitar"></i></button>
                                <img src="${producto.urlImg}" class="producto__img" alt="telefono-carrito">
                                <div class="producto__detalle">
                                  <p class="detalle__marca">${producto.marca}</p>
                                  <p class="detalle__precio">$${parseInt(producto.precio).toLocaleString()}</p>
                                </div>
                            </article>`);
    });
    $("#carrito-cantidad").html(carrito.productos.length);
    $(".btn-quitar").on("click",handlerRemoveElementCarrito);
  }  
};


function handlerRemoveElementCarrito(){

  carrito.productos.splice(carrito.productos.findIndex(element=>element.id===parseInt(this.value)),1);
  guardarEnStorage("productos",carrito);
  renderizarCarrito();
};

function renderizarCarrito(){
  $("#carrito-cantidad").html(carrito.productos.length);
  showCarrito($("#carrito-productos"),carrito.productos);
  if(carrito.productos.length === 0){
    $(CONTAINER_CARRITO).fadeOut(TIEMPO_RESPUESTA);
  }
}


export const createRangoDePrecios = (elementos)=>{
  let saltos = 1000;
  let max = Math.max(...(elementos.map(element => element.precio)));
  let min = Math.min(...(elementos.map(element => element.precio)));

  $("#controles").append(`<div class="controles__rango">
                          <h2 class="rango__titulo">Precio</h2>
                          <div class="rango__container">
                            <label>$${parseInt(min).toLocaleString()}</label>
                            <input id="rango-precio" type="range" min="${min}" max="${max}" step="${saltos}" value="${min}">
                            <label for="rango-precio">$${parseInt(max).toLocaleString()}</label>
                          </div>
                        </div>`);
};

export const createFiltroTipo = (elementos)=>{

  let tipos = elementos.reduce((acum,actual)=>{
    if(!acum.some(element=> element === actual.tipo)){
      acum.push(actual.tipo);
    }
    return acum;
  },[]);

  $("#controles").append(`<div class="controles__tipo">
                            <h2 class="tipo__titulo">Tipo</h2>
                            <div class="tipo__container" id="checkbox-tipos">

                            </div>
                        </div>`);

  tipos.forEach((element,index)=>{
    $("#checkbox-tipos").append(`<div class="container__item"><label for="${element}-${index}">${element.toUpperCase()}</label><input type="checkbox" id="${element}-${index}" class="check-tipo" value="${element}"></div>`)
  })

  
};

export const getProductoForm = ()=>{

  let obj = {
    urlImg:$("[name=urlImg]").val(),
    desc:$("[name=desc]").val(),
    nombre:$("[name=nombre]").val(),
    marca:$("[name=marca]").val(),
    gama:$("[name=gama]").val(),
    tipo:$("[name=tipo]").val(),
    stock:$("[name=stock]").val(),
    precio:$("[name=precio]").val(),
    cuotas:$("[name=cuotas]").val(),
  };
  return obj;
};


export const setProductoForm = (objeto)=>{

    $("[name=urlImg]").val(objeto.urlImg);
    $("[name=desc]").val(objeto.desc);
    $("[name=nombre]").val(objeto.nombre);
    $("[name=marca]").val(objeto.marca);
    $("[name=gama]").val(objeto.gama);
    $("[name=tipo]").val(objeto.tipo);
    $("[name=stock]").val(objeto.stock);
    $("[name=precio]").val(objeto.precio);
    $("[name=cuotas]").val(objeto.cuotas);



};