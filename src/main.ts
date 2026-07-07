import {Application} from "./runapp/app"
import {View} from "./ui/view";
import {InMemoryService} from "./persistence/memory";
import {Estudiante, Libro, Prestamo} from "./modelsave/type";

const studentmemory = new InMemoryService<Estudiante>()
const bookmemory = new InMemoryService<Libro>()
const loanmemory = new InMemoryService<Prestamo>() 

const view = new View(studentmemory, bookmemory, loanmemory)
const app =  new Application(view);

app.start();