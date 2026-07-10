import { IAccionadicional } from "../../core/abstration/interfaces";
import { Estudiante } from "../../types/type";
import scanf from 'scanf';
import { ICommand } from "../../core/abstration/interfaces";

export class DeleteStudentCommand implements ICommand {
  constructor(private _studentService: IAccionadicional<Estudiante>) {}

  execute() {
    console.log("Ingrese el ID del estudiante a eliminar: ")
            const id = scanf("%s")
    
            const status = this._studentService.delete(id)
            console.log(status ? "Eliminado" : "No encontrado")

  }

}