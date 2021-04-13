import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario : FormGroup = this._fb.group({
    genero         : [,Validators.required],
    notificaciones : [, Validators.required],
    condiciones    : [false, Validators.requiredTrue]
  });

  persona = {
    genero : 'F',
    notificaciones : true
  }

  constructor(private _fb : FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones : false
    });    

    //Si se desea cambiar el valor de la persona al momento de cambiar el formulario
    //this.miFormulario.valueChanges.subscribe( ({condiciones, ...rest}) => {
      //this.persona = rest;
    //});
  }

  guardar(){
    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones;

    this.persona = formValue;
  }
}
