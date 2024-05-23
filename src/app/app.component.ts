import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';
import { error } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  constructor( private usuariosServices: UsuariosService ){
    this.usuariosServices.obtenerUsuarios()
      .subscribe( resp => {

        console.log( resp );

      },  err  => {
        console.log('Error from obtenerUsuarios:',err );
      });

  }




}
