const express = require("express");
const path = require("path");
const socketIO = require("socket.io");
const app = new express();
const apiProductos = require("./routes/apiProducto.js"); 
const apiCarrito = require("./routes/apiCarrito");
const mdw = require("./middlewares/middlewares");

//middlewares
app.use((req,res,next)=>{
    let user ={name:"Alejandro",type: "admin",};
    req.user=user;
    next();
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

app.use("/api/productos",apiProductos);
app.use("/api/carrito",apiCarrito);
app.use(mdw.rutaNoImplementada);



//settings
app.set("port", process.env.PORT || 8080);


//server
const server  = app.listen(app.get("port"),()=>console.log(`App corriendo en ${app.get("port")}`));


//socket
const io = socketIO(server);
io.on("connection",(socket)=>{
    console.log("Usuario conectado con ID", socket.id);
    
    socket.on("chat:tiping",(data)=>{
        socket.broadcast.emit("chat:tiping", data);
    });
    socket.on("new:message",(data)=>{
        io.sockets.emit("new:message", data);
    });
});

app.io = io;