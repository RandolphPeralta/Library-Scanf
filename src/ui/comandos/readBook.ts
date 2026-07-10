import { IAccionadicional } from "../../core/abstration/interfaces";
import { Libro } from "../../types/type";
import scanf from 'scanf';
import { ICommand } from "../../core/abstration/interfaces";

export class ReadBookCommand implements ICommand {
  constructor(private _bookService: IAccionadicional<Libro>) {}

  execute() {
    const libros = this._bookService.read()

        console.log("\n===== LISTADO DE LIBROS =====")

        if (libros.length === 0) {
            console.log("No hay libros registrados")
            return
        }

        libros.forEach(libro => {console.log(libro)
        })
  }

}