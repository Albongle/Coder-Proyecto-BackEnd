const checkAccesAdmin = (req, res, next) => {
    if (req.user.type!= undefined && req.user.type === "admin") {
        next();
    }else{
      res.json({error:"Ustede no es admin"});
    }
  }
const rutaNoImplementada =(req,res,next)=>{
  res.json({error:-2, descripción:`ruta método ${ req.method} no implementada`});
}
  module.exports = {checkAccesAdmin,rutaNoImplementada};