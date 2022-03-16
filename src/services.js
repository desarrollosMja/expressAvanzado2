const Producto = require("./producto")
const productos = []

class Servicios{

    getAll(req,res,next){
        if (productos.length == []) {
            res.json({error: "No hay productos cargados"})
        } else res.json(productos)
    }

    getById(req,res,next){
        const productoEncontrado = productos.find(item => item.id == req.params.id)
        if (productoEncontrado != undefined) {
            res.json(productoEncontrado)
        } else res.json({error: "Producto no encontrado"})
    }

    save(req,res,next){
        const newProducto = new Producto(req.body.title,req.body.price,req.body.thumbnail,productos.length+1)
        productos.push(newProducto)
        res.json(newProducto)
    }

    update(req,res,next){
        const { id } = req.params
        const { title, price, thumbnail } = req.body
        for (const producto of productos) {
            if (producto.id == id){
                producto.title = title
                producto.price = price
                producto.thumbnail = thumbnail
                res.json({title,price,thumbnail})
            }
        }
        res.json({error: "Producto no encontrado"})
    }

    delete(req,res,next){
        const { id } = req.params
        for (let index = 0; index < productos.length; index++) {
            if (productos[index].id == id){
                const productoEliminado = productos.splice(index,1)
                res.json(productoEliminado) 
            }
        }
        res.json({error: "Producto no encontrado"})
    }
}

module.exports = new Servicios()