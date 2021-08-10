import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  pessoa = {
    nome: '',
    rg: '',
    cpf: '',
    sexo: '',
    nascimento: '',
    email: '',
    rua: '',
    numero: '',
    bairro: '',
    complemento: '',
    cidade: '',
    estado: '',
    cep: '',
  }
  //config : GLOBAL_CONFIGURATION;

  public teste(): void{
    console.log(this.pessoa.nome);
    console.log(this.pessoa.rg);
    console.log(this.pessoa.cpf);
    console.log(this.pessoa.sexo);
    console.log(this.pessoa.nascimento);
    console.log(this.pessoa.email);
    console.log(this.pessoa.rua);
    console.log(this.pessoa.numero);
    console.log(this.pessoa.bairro);
    console.log(this.pessoa.complemento);
    console.log(this.pessoa.cidade);
    console.log(this.pessoa.estado);
    console.log(this.pessoa.cep);
  }

  constructor(private router: Router) { }

  // funcao(): void {
  //   this.router.navigate([this.config.basePath + "/consulta"])
  // }

  ngOnInit(): void {
  }

}