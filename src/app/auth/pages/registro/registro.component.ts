import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  nombreApellidoPatter: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  noPuedeSerRaxxus( control : FormControl ){
    const valor: string = control.value?.trim().toLowerCase();
    if(valor === 'raxxus'){
      return {
        noRaxxus : true
      }
    }else{
      return null;
    }
  }

  miFormulario: FormGroup = this.fb.group({
    nombre : [ '', [Validators.required, Validators.pattern(this.nombreApellidoPatter)] ],
    email : ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    username : ['', [Validators.required, this.noPuedeSerRaxxus]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre : 'Uriel Enrique',
      email : 'ejemplo@dominio.com',
      username : 'juasjuas'
    });
  }

  campoNoValido(campo : string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

}
