import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {


  @Input() public tentativas!: number;

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() { 
    console.log(this.tentativas)
  }

  ngOnChanges(){

    if(this.tentativas !== this.coracoes.length){
      // 3 - 2 = 1, 1-1 = 0, vamos afetar o indice 0
      let i = this.coracoes.length - this.tentativas 
      this.coracoes[i - 1].cheio = false
      
    }

  }


  ngOnInit(): void {
  }



}
