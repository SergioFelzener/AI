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
   return this.http.get<Cliente[]>('https://crudcrud.com/api/659bf66c59f24925bcd54a7e1499f51d/cliente');
  }

  inserirCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>('https://crudcrud.com/api/659bf66c59f24925bcd54a7e1499f51d/cliente', cliente);
   }

   atualizarCliente(cliente: Cliente): Observable<any>{
     const id = cliente._id;
     delete cliente._id;
    return this.http.put('https://crudcrud.com/api/659bf66c59f24925bcd54a7e1499f51d/cliente/' + id, cliente);
   }

   deletarCliente(id: string): Observable<any>{
    return this.http.delete('https://crudcrud.com/api/659bf66c59f24925bcd54a7e1499f51d/cliente/' + id);
   }
}
