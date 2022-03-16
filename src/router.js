const { Router } = require("express")
const router = Router()
const Servicios = require("./services")


module.exports = app => {
    app.use("/api", router)

    router.get("/productos/listar", Servicios.getAll)

    router.get("/productos/listar/:id", Servicios.getById)

    router.post("/productos/guardar", Servicios.save)

    router.put("/productos/actualizar/:id", Servicios.update)
    
    router.delete("/productos/borrar/:id", Servicios.delete)
}