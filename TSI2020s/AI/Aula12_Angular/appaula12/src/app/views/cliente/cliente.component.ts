import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  arrayClientes: Cliente[];
  colunas = ['nome', 'cpf', 'acoes'];
  clienteSelecionado: Cliente;
  inserindo = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.clienteService.listarClientes().subscribe(clientes => {
      this.arrayClientes = clientes;
    });
  }

  remover(id: string){
    this.clienteService.deletarCliente(id).subscribe(() => {
      alert("Cliente Removido");
      this.listar();
    });
  }

  selecionar(cliente: Cliente){
    this.inserindo = false;
    this.clienteSelecionado = cliente;
  }

  cancelar(){
    this.clienteSelecionado = null;
  }

  salvar(){
    if (this.inserindo){
      this.clienteService.inserirCliente(this.clienteSelecionado).subscribe(() => {
        alert("Cliente Inserido");
        this.cancelar();
        this.listar();
      });
    }else {
      this.clienteService.atualizarCliente(this.clienteSelecionado).subscribe(() => {
        alert("Cliente Atualizado");
        this.cancelar();
        this.listar();
      });
    }
  }

  novoCliente(){
    this.inserindo = true;
    this.clienteSelecionado = new Cliente();
  }

}
