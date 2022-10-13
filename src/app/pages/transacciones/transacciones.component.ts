import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TrasnsaccionesInterface } from 'src/app/models/transacciones';
import { UserInterface } from 'src/app/models/users';
import { TransactionsService } from 'src/app/services/transaction/transactions.service';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'origen', 'destino', 'cantidad', 'fecha_realizada'];
  transacciones: TrasnsaccionesInterface[] = [];
  opcion: string = "";

  transaccion: TrasnsaccionesInterface[] = [];

  formTransaccion!: FormGroup;

  constructor(private transactionService: TransactionsService, private fb: FormBuilder, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(_params => {
      this.opcion = _params['op'];
    })

    this.formTransaccion = fb.group({
      id: ['', Validators.required],
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      cantidad: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    if (this.opcion == "1") {
      this.getTransacciones();
    }
  }

  getTransacciones() {
    this.transactionService.getTransaction().subscribe(res => {
      this.transacciones = res.result;
    });
  }
  
  nuevaTrasaccion(origen: UserInterface, destino: UserInterface, cantidad: number) {
    this.transactionService.newTrasaction(origen, destino, cantidad).subscribe(() => {
      alert('listo');
    })
  }
  
  getTransaccionId(id: number) {
    this.transactionService.getTransactionId(id).subscribe(res => {
      this.transaccion = res.result;
    });
  }
}
