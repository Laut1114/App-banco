import { Component, OnInit } from '@angular/core';
import { ClientInterface } from '../models/clients';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'direccion', 'ciudad', 'telefono'];
  clientes: ClientInterface[] = [];

  opcion: string = "";

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients()
  }

  getClients() {
    this.clientService.getClients().subscribe(res => {
      this.clientes = res.result;
    })
  }

}
