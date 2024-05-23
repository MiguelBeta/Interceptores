import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { }



  obtenerUsuarios(): Observable<any> {

    // Declaramos params
    let params = new HttpParams().append('page', '2');
    params = params.append( 'nombre', 'Miguel Beta' );

    //Se concatenan los parametros
    return this.http.get(`https://reqres123.in/api/user`, {
    params
  }).pipe(

      map( resp => {
        return ( resp as any ).data;
      })
    );

  }

}
