import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase.';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadeFrase: Frase;

  public progresso: number = 0

  constructor() {
    this.atualizaRodada();
    console.log(this.rodadeFrase)
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    //console.log(this.resposta);
  }

  public verificaResposta(): void {

    if (this.rodadeFrase.frasePort == this.resposta) {
      alert('Resposta correta')

      // trocar a pergunta da rodada
      this.rodada++;

      // progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      console.log(this.progresso)

      // atualiza o objeto da rodade
     this.atualizaRodada();
    
    } else {
      alert('Resposta incorreta.')
    }

  }

  public atualizaRodada(): void {
    this.rodadeFrase = this.frases[this.rodada];
    this.resposta = '';
  }



}
