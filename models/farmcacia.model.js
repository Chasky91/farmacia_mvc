import pool from  '../config.db.js'

const  todos = async () => {
    const  result = await pool.execute('SELECT * FROM farmacia')
    return result[0]
}

const  crear = async (nombre, ciudad,  direccion,  telefono ) => {

    const result = await pool.execute(
        'INSERT INTO farmacia (nombre, ciudad, direccion, telefono) VALUES (?, ?, ?, ?)', 
        [nombre, ciudad, direccion, telefono]
    )
    const  nuevo = await buscarUno(nombre)
    return nuevo
}

const buscarUno = async (nombre) => {
    const  result = await pool.execute('SELECT * FROM farmacia WHERE nombre = ?', [nombre])
    return result[0]
}

const actualizar = async (datos, id) => {
    console.log(datos)
    const  result = await pool.execute(
        'UPDATE farmacia  SET nombre = ?, ciudad = ?, direccion = ?, telefono = ? WHERE nombre = ?', 
        [datos.nombre, datos.ciudad, datos.direccion, datos.telefono, id]
    )
    return result[0]
}

const  eliminar = (id) => {
    const  result = pool.execute(' DELETE FROM usuarios WHERE  id ? ', [id])
    return result[0]
}

export default   {
    crear,
    todos,
    buscarUno,
    actualizar,
    eliminar
}