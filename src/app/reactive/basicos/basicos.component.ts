import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

/*   miFormulario: FormGroup = new FormGroup({
    nombre      : new FormControl('RTX 4080 TI'),
    precio      : new FormControl(0),
    existencias : new FormControl(5)
  }); */

  miFormulario: FormGroup = this._formBuilder.group({
    nombre      : [, [Validators.required, Validators.minLength(3)]],
    precio      : [, [Validators.required, Validators.min(0)]],
    existencias : [, [Validators.required, Validators.min(0)]]
  })

  constructor(private _formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre : 'RTX 4080 TI',
      existencias : 10
    });
  }

  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }


  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
