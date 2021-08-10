import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  tabela: Pessoa[] = [
    {
      nome: "Bem Hur",
      email: "bemhur@gmail.com"
    },
    {
      nome: "Lucas",
      email: "lucas@gmail.com",
    },
    {
      nome: "Walber",
      email: "walber@gmail.com"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

interface Pessoa {
  nome: string;
  email: string;
}