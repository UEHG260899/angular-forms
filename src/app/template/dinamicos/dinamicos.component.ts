import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string,
  favoritos: Favorito[]
}

interface Favorito {
  id: number,
  nombre: string
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {


  persona: Persona = {
    nombre: 'Uriel',
    favoritos: [
      { id: 1, nombre: 'GTA' },
      { id: 2, nombre: 'Ark' }
    ]
  }

  nuevoJuego!: string;


  ngOnInit(): void {
  }

  guardar() {
    console.log('Fromulario posteado');
  }


  agregar() {
    this.persona.favoritos.push(
      {
        id: this.persona.favoritos.length + 1,
        nombre: this.nuevoJuego
      });

    this.nuevoJuego = '';
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

}
