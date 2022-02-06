module.exports = class Producto{
     static #arrProductos = [{
        "id": 1,
        "urlImg": "/assets/img/equipos/G60s.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "G60S",
        "marca":"Motorola",
        "gama":"Media",
        "tipo": "Telefono",
        "stock": 5,
        "precio":47999,
        "cuotas":6
      },
      {
        "id": 2,
        "urlImg": "/assets/img/equipos/12.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "12",
        "marca":"Apple",
        "gama":"Alta",
        "tipo": "Telefono",
        "stock": 15,
        "precio":215999,
        "cuotas":12
      },
      {
        "id": 3,
        "urlImg": "/assets/img/equipos/12ProMax.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "12ProMax",
        "marca":"Apple",
        "gama":"Alta",
        "tipo": "Telefono",
        "stock": 6,
        "precio":305999,
        "cuotas":12
      
      },
      {
        "id": 4,
        "urlImg": "/assets/img/equipos/A22.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "A22",
        "marca":"Samsung",
        "gama":"Baja",
        "tipo": "Telefono",
        "stock": 10,
        "precio":19000,
        "cuotas":3
      
      },
      {
        "id": 5,
        "urlImg": "/assets/img/equipos/A32.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "A32",
        "marca":"Samsung",
        "gama":"Baja",
        "tipo": "Telefono",
        "stock": 20,
        "precio":39669,
        "cuotas":3
      
      },
      {
        "id": 6,
        "urlImg": "/assets/img/equipos/Buds+.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "Buds+",
        "marca":"Samsung",
        "gama":"Alta",
        "tipo": "Auricular",
        "stock": 15,
        "precio":15999,
        "cuotas":12
      
      },
      {
        "id": 7,
        "urlImg": "/assets/img/equipos/E7.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "E7",
        "marca":"Motorola",
        "gama":"Baja",
        "tipo": "Telefono",
        "stock": 9,
        "precio":39999,
        "cuotas":"3"
      
      },
      {
        "id": 8,
        "urlImg": "/assets/img/equipos/Edge20.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "Edge20",
        "marca":"Motorola",
        "gama":"Media",
        "tipo": "Telefono",
        "stock": 4,
        "precio":139000,
        "cuotas":6
      
      },
      {
        "id": 9,
        "urlImg": "/assets/img/equipos/Fit2.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "Fit2",
        "marca":"Samsung",
        "gama":"Media",
        "tipo": "SmartWatch",
        "stock": 5,
        "precio":5999,
        "cuotas":6
      
      },
      {
        "id": 10,
        "urlImg": "/assets/img/equipos/K41s.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "K41S",
        "marca":"LG",
        "gama":"Media",
        "tipo": "Telefono",
        "stock": 10,
        "precio":284999,
        "cuotas":6
      
      },
      {
        "id": 11,
        "urlImg": "/assets/img/equipos/K42.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "K42",
        "marca":"LG",
        "gama":"Media",
        "tipo": "Telefono",
        "stock": 12,
        "precio":30999,
        "cuotas":6
      
      },
      {
        "id": 12,
        "urlImg": "/assets/img/equipos/K51s.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "K51S",
        "marca":"LG",
        "gama":"Alta",
        "tipo": "Telefono",
        "stock": 15,
        "precio":31999,
        "cuotas":12
      
      },
      {
        "id": 13,
        "urlImg": "/assets/img/equipos/MotoG20.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "G20",
        "marca":"Motorola",
        "gama":"Media",
        "tipo": "Telefono",
        "stock": 20,
        "precio":45999,
        "cuotas":6
      
      },
      {
        "id": 14,
        "urlImg": "/assets/img/equipos/S21.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "S21",
        "marca":"Samsung",
        "gama":"Alta",
        "tipo": "Telefono",
        "stock": 10,
        "precio":159000,
        "cuotas":12
      
      },
      {
        "id": 15,
        "urlImg": "/assets/img/equipos/S21Ultra.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "S21Ultra",
        "marca":"Samsung",
        "gama":"Alta",
        "tipo": "Telefono",
        "stock": 8,
        "precio":205000,
        "cuotas":12
      
      },
      {
        "id": 16,
        "urlImg": "/assets/img/equipos/SonyBTH.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "SonyBTH",
        "marca":"Sony",
        "gama":"Baja",
        "tipo": "Auricular",
        "stock": 2,
        "precio":7299,
        "cuotas":3
      
      },
      {
        "id": 17,
        "urlImg": "/assets/img/equipos/TabA7.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "TabA7",
        "marca":"Samsung",
        "gama":"Media",
        "tipo": "Tablet",
        "stock": 5,
        "precio":37999,
        "cuotas":6
      
      },
      {
        "id": 18,
        "urlImg": "/assets/img/equipos/Velvet.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "Velvet",
        "marca":"LG",
        "gama":"Alta",
        "tipo": "Telefono",
        "stock": 6,
        "precio":69999,
        "cuotas":12
      
      },
      {
        "id": 19,
        "urlImg": "/assets/img/equipos/WatchActive2.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "WatchActive2",
        "marca":"Samsung",
        "gama":"Alta",
        "tipo": "SmartWatch",
        "stock": 7,
        "precio":34999,
        "cuotas":12
      
      },
      {
        "id": 20,
        "urlImg": "/assets/img/equipos/ZFlip3G.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "ZFlip3G",
        "marca":"Samsung",
        "gama":"Alta",
        "tipo": "Telefono",
        "stock": 13,
        "precio":239999,
        "cuotas":12
      
      },
      {
        "id": 21,
        "urlImg": "/assets/img/equipos/ZFold3.png",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, explicabo, facilis consequuntur doloremque, quae saepe voluptatem sapiente eius repudiandae!",
        "nombre": "ZFold3",
        "marca":"Samsung",
        "gama":"Alta",
        "tipo": "Telefono",
        "stock": 3,
        "precio":259999,
        "cuotas":12
      
      }
];

    getProductos(){
        return  Producto.#arrProductos.length === 0 ? null : Producto.#arrProductos;
    }
    getProductoById(id){
        return id != undefined && typeof(id) === "number" ? Producto.#arrProductos.find(element=> element.id === id): null;
    }

    setProducto(objeto){
        if(Producto.#checkAttributes(objeto)){
            let id = this.#getMaxId();
            id++;
            objeto.id = id;
            let objReturn =  {   
              id: objeto.id,
              urlImg: objeto.urlImg,
              desc: objeto.desc,
              nombre: objeto.nombre,
              marca:objeto.marca,
              gama:objeto.gama,
              tipo: objeto.tipo,
              stock: objeto.stock,
              precio:objeto.precio,
              cuotas:objeto.cuotas,
            };
            Producto.#arrProductos.push(objReturn);
            return objReturn;
        }
        return null;
    }
    updateProducto(id,objeto){


        if(Producto.#checkAttributes(objeto) && typeof(id) === "number"){
            let pos = Producto.#arrProductos.findIndex(element=> element.id === id);
            if( pos > -1){
                Producto.#arrProductos.splice(pos,1);
                let objReturn =                     {   
                  id: id,
                  urlImg: objeto.urlImg,
                  desc: objeto.desc,
                  nombre: objeto.nombre,
                  marca:objeto.marca,
                  gama:objeto.gama,
                  tipo: objeto.tipo,
                  stock: objeto.stock,
                  precio:objeto.precio,
                  cuotas:objeto.cuotas,
                }
                Producto.#arrProductos.push(objReturn);
                return objReturn;
            }
        }
        return null;
    }
    deleteProducto(id){

        if(id != undefined && typeof(id) === "number"){
            let pos = Producto.#arrProductos.findIndex(element=> element.id === id);
            if( pos > -1){
                Producto.#arrProductos.splice(pos,1);
                return true;
            }
        }
        return false;
    }

    #getMaxId(){

        return Producto.#arrProductos.length === 0 ? 0 : Producto.#arrProductos.reduce((acum,proximo)=> acum>proximo.id? acum:proximo.id,0);
    }

    static #checkAttributes(objeto){
      return (objeto.urlImg != undefined && objeto.urlImg != "") && 
      (objeto.precio != undefined && parseInt(objeto.precio) != NaN) &&
      (objeto.desc != undefined && objeto.marca !=undefined && objeto.gama != undefined 
        && objeto.tipo != undefined && objeto.nombre != undefined) &&
      (objeto.stock != undefined && parseInt(objeto.stock) != NaN) && 
      (objeto.cuotas != undefined && parseInt(objeto.cuotas) != NaN);
    }

}