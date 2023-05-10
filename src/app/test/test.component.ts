import { Component } from '@angular/core';
import { ExemploService } from '../exemplo.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  title: String = 'aula-inicial-angular teste';
  nomes: Array<string> = ["Gabriel", "Rafael", "Douglas"];
  valorAtual:number = 0;
  nomePessoa: string = "";

  constructor(
    private exemploService: ExemploService
  ) {
  }

  private obterHoraAtual(): number {
    return new Date().getHours();
  }

  public jaENoite(): boolean {
    return this.obterHoraAtual() > 18;
  }

  public jaETarde(): boolean {
    return this.obterHoraAtual() > 12 && this.obterHoraAtual() <= 18;
  }

  public jaEDia(): boolean {
    return this.obterHoraAtual() < 12;
  }

  public async aoClicarNoBotao(): Promise<void> {
    this.valorAtual++;
     const result = await this.exemploService.exemplo();
     console.log(result);
  }
}
