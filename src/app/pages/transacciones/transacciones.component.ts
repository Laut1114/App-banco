import { Component, OnInit } from '@angular/core';
import { TrasnsaccionesInterface } from 'src/app/models/transacciones';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'origen', 'destino', 'cantidad', 'fecha_realizada'];
  transacciones: TrasnsaccionesInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
