import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  listarClientes(): Observable<Cliente[]>{
   return this.http.get<Cliente[]>('https://crudcrud.com/api/7e462cdc452e4d229f63a9289a7066a6/clientes');
  }

  inserirCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>('https://crudcrud.com/api/7e462cdc452e4d229f63a9289a7066a6/clientes', cliente);
   }

   atualizarCliente(cliente: Cliente): Observable<any>{
     const id = cliente._id;
     delete cliente._id;
    return this.http.put('https://crudcrud.com/api/7e462cdc452e4d229f63a9289a7066a6/clientes/' + id, cliente);
   }

   deletarCliente(id: string): Observable<any>{
    return this.http.delete('https://crudcrud.com/api/7e462cdc452e4d229f63a9289a7066a6/clientes/' + id);
   }
}
