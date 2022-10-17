import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { TrasnsaccionesInterface } from 'src/app/models/transacciones';
import { UserInterface } from 'src/app/models/users';
import { UserService } from 'src/app/services/account/user.service';
import { TransactionsService } from 'src/app/services/transaction/transactions.service';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'origen', 'destino', 'cantidad', 'fecha_realizada'];

  snackBarHorizontal: MatSnackBarHorizontalPosition = 'center';
  snackBarVertical: MatSnackBarVerticalPosition = 'top';

  transacciones: TrasnsaccionesInterface[] = [];
  opcion: string = "";

  // DATOS DE LOS USER PARA USARLOS COMO ORIGEN Y DESTINO
  userTransaction: UserInterface[] = [];

  formTransaccion!: FormGroup;

  constructor(private transactionService: TransactionsService, private userService: UserService, private fb: FormBuilder, private route: ActivatedRoute, private snackBar: MatSnackBar) { 
    this.route.queryParams.subscribe(_params => {
      this.opcion = _params['op'];
    })

    this.formTransaccion = this.fb.group({
      id: [''],
      origen: [''],
      destino: [''],
      cantidad: ['']
    })

    this.userService.getUsers().subscribe((res) => {
      this.userTransaction = res.result;
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
  
  nuevaTrasaccion(transaccion: TrasnsaccionesInterface) {

    console.log(transaccion);

    this.transactionService.newTrasaction(transaccion).subscribe({
      next: () => {
        this.snackBar.open("Transacción realizada correctamente", undefined, {
          duration: 5500,
          horizontalPosition: this.snackBarHorizontal,
          verticalPosition: this.snackBarVertical,
          panelClass: ['back-color']
        });
      }, error: (err) => {
        console.log(err);

        this.snackBar.open("Algo salio mal y no se pudo realizar la transacción", "Probar denuevo", {
          horizontalPosition: this.snackBarHorizontal,
          verticalPosition: this.snackBarVertical,
          panelClass: ['back-color']
        });
      }
    });
  }
  
  getTransaccionId(id: number) {
    this.transactionService.getTransactionId(id).subscribe(res => {

      console.log(res.result);
      

      if (res.result.length < 1) {
        this.snackBar.open("No existe una transacción con el id: " + id, undefined, {
          duration: 6000,
          horizontalPosition: this.snackBarHorizontal,
          verticalPosition: this.snackBarVertical,
          panelClass: ['back-color']
        });
      } else {
        this.transacciones = res.result;
      }
    });
  }
}