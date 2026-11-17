import { Router } from "express"
import {obtenerTodos, crear,modificar} from "../controllers/faramacia.controller.js"

const routerFarmacia = Router()

routerFarmacia.get('/todos', obtenerTodos )
routerFarmacia.post('/nuevo', crear )
routerFarmacia.put('/actualizar/:id', modificar )
export  default routerFarmacia