import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientInterface } from '../models/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get<any>('http://localhost:3000/api/clients');
  }

  addClient(client: ClientInterface) {
    return this.http.post<any>('http://localhost:3000/api/clients/add', client);
  }

  updateClient(id: number, client: ClientInterface) {
    return this.http.put<any>(`http://localhost:3000/api/clients/update/${id}`, client);
  }

  deleteClient(id: number) {
    return this.http.delete(`http://localhost:3000/api/clients/delete/${id}`)
  }
}

