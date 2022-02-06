const express = require("express");
const producto = require("../modules/producto");
const router = express.Router();
const mdw = require("../middlewares/middlewares");

const controllerProducto = new producto();

router.get("",(req,res)=>{

    res.status(200).json(controllerProducto.getProductos());
});
router.get("/:id",(req,res)=>{
    let {id} = req.params;
    id = parseInt(id);
    let obj = controllerProducto.getProductoById(id);
    obj != null ? res.status(200).json(obj): res.status(400).json({error:'Producto no encontrado'});
});

router.post("",mdw.checkAccesAdmin,(req,res)=>{
    let obj = {...req.body};
    let objRetorno = controllerProducto.setProducto(obj);

    if(objRetorno!=null){
        req.app.io.sockets.emit("refresh-productos", controllerProducto.getProductos());
        res.status(200).json(obj);
    }else{
        res.status(406).json({error:'Error en la carga del producto'});
    }
});

router.put("/:id",mdw.checkAccesAdmin,(req,res)=>{
    let {id} = req.params;
    let obj = {...req.body};
    id = parseInt(id);
    let objRetorno = controllerProducto.updateProducto(id,obj);
    if(objRetorno!=null){
        req.app.io.sockets.emit("refresh-productos", controllerProducto.getProductos());
        res.status(200).json(obj);
    }else{
        res.status(406).json({error:'Error en la carga del producto'});
    }
});

router.delete("/:id",mdw.checkAccesAdmin,(req,res)=>{
    
    let {id} = req.params;
    id = parseInt(id);
    if(controllerProducto.deleteProducto(id)){
        req.app.io.sockets.emit("refresh-productos", controllerProducto.getProductos());
        res.status(200).json({status:`ok`,message:`Producto con Id ${id} eliminado`});
    }else{
        res.status(406).json({error:'Producto no encontrado'});
    }
});

module.exports = router;