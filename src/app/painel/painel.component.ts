import { Component, EventEmitter, OnInit, Output, OnDestroy  } from '@angular/core';

import{Frase} from '../shared/frase.model'
import{Frases} from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  //criando uma variavel para recever o array de frases criado no frase-mock
  //a qual a mesma foi modelada no frase.model
  public frases: Frase[] = Frases
  public instrucao: string ="Traduza a frase"
  public resposta: string = '';
  public rodada: number = 0
  public rodadaFrase!: Frase;
  public progresso: number = 0;
  public tentativas: number = 3;
  @Output() public encerrarJogo = new EventEmitter()

  constructor() { 
    this.atualizaRodada()
  }

  ngOnDestroy(): void {
    console.log('Bum')
  }


//viabiliza a inclusao de um metodo do ciclo de vida do componente 
  ngOnInit() {

  }

  //pega oq o usuario digitou
  public atualizarResposta(resposta:Event): void{
    this.resposta =(<HTMLInputElement>resposta.target).value
  }

  public verificarResposta():void {
    console.log('s')

    if(this.rodadaFrase.frasePtBr == this.resposta){
  
     
      this.rodada++;

      if(this.rodada == 4){
  this.encerrarJogo.emit('vitoria')

      }

      this.atualizaRodada()

      this.progresso = this.progresso + 25 
      
            
      }else{
        this.tentativas --;
        if(this.tentativas === -1){
          this.encerrarJogo.emit('derrota')
        }

      }
    }

    public atualizaRodada():void{
      this.rodadaFrase = this.frases[this.rodada]
      this.resposta = ''
    }
   
  }


