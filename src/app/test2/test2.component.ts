import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  nomeUrl: string = "";

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params): any => {
      console.log(params['nome']);
      this.nomeUrl = params['nome'];
    });
  }

  ngOnInit(): void {
    
  }

  aoFazerAniversario(idadeAtual: number): void {
    alert(`Parabéns, você fez ${idadeAtual}`);
  }
}
