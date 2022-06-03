import { Component } from "@angular/core";
//aqui o angular vai saber que esta classe é um component
@Component({
    //rotulo dos componentes
    selector:'app-topo',
    //o arquivo .html que vai conter a view desse componente
    templateUrl:'./topo.Component.html',
    styleUrls: ['./topo.component.css']

})
//export para que a classe possa ser exportada/usada em outro lugar 
export class TopoComponent{
 public titulo: string = 'Aprendendo Inglês'
}