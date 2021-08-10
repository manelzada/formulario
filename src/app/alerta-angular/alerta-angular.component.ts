import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerta-angular',
  templateUrl: './alerta-angular.component.html',
  styleUrls: ['./alerta-angular.component.css']
})
export class AlertaAngularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  testeString: string = "oi";

  @Input()
  nome: string = "";

  @Output()
  funcao = new EventEmitter();

  testFuncao(): void {
    this.funcao.emit(console.log("Teste"));
  }
}
