import  modelFarmacia from '../models/farmcacia.model.js'  

const crear = async (req, res) => {

    const nombre = req.body.nombre
    const  ciudad = req.body.ciudad
    const direccion = req.body.direccion
    const  telefono = req.body.telefono

    const result = await modelFarmacia.crear(nombre,ciudad,direccion,telefono)

    res.json(result)

}

const  obtenerTodos = async (req, res) => {       
    const  usuarios = await modelFarmacia.todos()
    res.json(usuarios)
}


const  modificar = async (req, res) => {
    const id = req.params.id

    const nombre = req.body.nombrename
    const  ciudad = req.body.ciudad
    const direccion = req.body.direccion
    const  telefono = req.body.fehca_nac
    const pais = req.body.pais

    const datos = {
        nombre,
        ciudad,
        direccion,
        telefono,
        pais
    }

    const resultadoActualizar = await modelUsuario.actualizar(datos, Number(id))

    res.json(
        resultadoActualizar
    )
} 

const  ontenerUno = async (nombre) => {
    const  resultado = await modelFarmacia.buscarUno(nombre)
    return resultado
}


const  darDeBaja = () => {
    
}




export { 
    obtenerTodos, 
    crear,
    modificar
}