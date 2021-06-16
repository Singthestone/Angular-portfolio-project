import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';


// Inyección
@Injectable({

  providedIn: 'root'

})

// Exportación
export class InfoPageService {

  info: InfoPage ={};
  load: boolean = false;

  equipo: any[] = [];

  constructor( private http: HttpClient) {

    // console.log('Servicio de InfoPages listo');

    this.cargarInfo();
    this.cargarEquipo();

  }


  // Método "Cargar Info"
  private cargarInfo(){

    // Leer el archivo JSON
    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: InfoPage ) => {

        this.load = true;
        this.info = resp;

      });

  }


  // Método "Cargar Equipo"
  private cargarEquipo(){

    // Leer el archivo JSON
    this.http.get('https://angular-portafolio-2a290-default-rtdb.europe-west1.firebasedatabase.app/team.json')
      .subscribe( (resp: any)  => {

        this.equipo = resp;
        // console.log( resp );

      });

  }

}
