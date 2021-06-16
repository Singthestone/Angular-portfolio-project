import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Producto } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;


  constructor( private http: HttpClient) {

    // this.cargarProductos();
  }

  // private cargarProductos(){

  //   this.http.get('https://angular-portafolio-2a290-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
  //     .subscribe( (resp: Producto) => {

  //       console.log(resp);

  //       this.cargando = false;
  //       this.productos = resp;
  //     });
  // }
}
