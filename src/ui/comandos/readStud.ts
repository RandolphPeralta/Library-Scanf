import { IAccionadicional } from "../../core/abstration/interfaces";
import { Estudiante } from "../../types/type";
import scanf from 'scanf';
import { ICommand } from "../../core/abstration/interfaces";

export class ReadStudentCommand implements ICommand {
  constructor(private _studentService: IAccionadicional<Estudiante>) {}

  execute() {
    const estudiantes = this._studentService.read()

        console.log("\n===== LISTADO =====")

        estudiantes.forEach(estudiante => { console.log(estudiante) })
  }
}