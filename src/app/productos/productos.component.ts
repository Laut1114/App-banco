import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from '../models/products';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'precio', 'costo', 'cantidad'];

  productos!: ProductsInterface[];
  formProductos!: FormGroup;

  opcion: string = "";

  constructor(private productService: ProductService, private route: ActivatedRoute, private fb: FormBuilder) { 
    this.formProductos = this.fb.group({
      id: [],
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      costo: ['', Validators.required],
      cantidad: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      this.opcion = params['op'];
    });

    if (this.opcion == "1") {
      this.getProducts()
    }
  }

  getProducts() {
    this.productService.getProducts().subscribe(res => {
      this.productos = res.result;
    });
  }

  addProducts() {
    if(!this.formProductos.invalid) {
      this.productService.addProduct(this.formProductos.value).subscribe(() => {
        alert('Producto agregado');
      });
      this.formProductos.reset();
    }
  }

  updateProduct(id: number, productSelected: ProductsInterface) {
    const idUser = id;
    const { nombre, precio, costo, cantidad } = productSelected;
    this.formProductos.setValue({
      nombre, precio, costo, cantidad
    });

    this.productService.updateProduct(idUser, productSelected);
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      alert('eliminado');
    });
  }
}