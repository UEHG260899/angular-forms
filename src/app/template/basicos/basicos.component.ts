import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  //Busca un elemento dentro de un template
  @ViewChild('miFormulario') miFormulario!: NgForm;
  initForm = {
    producto: '',
    preicio: 0,
    existencias: 0
  }

  constructor() { }

  ngOnInit(): void {
  }


  nombreValido(): boolean{
    //? indica que en caso de que se tenga un valor se debe de coninuar con la evaluación.
    return this.miFormulario?.controls.producto?.invalid && this.miFormulario?.controls.producto?.touched
  }

  precioValido(): boolean{
    return (this.miFormulario?.controls.precio?.value < 0) && (this.miFormulario?.controls.precio?.touched);
  }

  guardar(){
    this.miFormulario.resetForm({
      //Se puede enviar un objeto que contenga los predeterminados para los campos
      precio: 0,
      existencias: 0
    });
  }

}
