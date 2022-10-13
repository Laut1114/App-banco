import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrasnsaccionesInterface } from 'src/app/models/transacciones';
import { UserInterface } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  getTransaction() {
    return this.http.get<any>('http://localhost:3000/api/transactions');
  }

  getTransactionId(id: number) {
    return this.http.get<any>(`http://localhost:3000/api/transactions/${id}`);
  }

  newTrasaction(origen: UserInterface, destino: UserInterface, cantidad: number) {
    return this.http.post<any>('http://localhost:3000/api/transaction/new', [origen, destino, cantidad]);
  }

}