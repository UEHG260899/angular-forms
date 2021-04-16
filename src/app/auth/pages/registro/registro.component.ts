import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre : [ '', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)] ],
    email : ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username : ['', [Validators.required, this.validatorService.noPuedeSerRaxxus]],
    password : ['', [Validators.required, Validators.minLength(6)]],
    confPass : ['', [Validators.required]]
  }, {
    validators: [this.validatorService.camposIguales('password', 'confPass')]
  });

  get emailErrorMsg(): string{
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.required){
      return 'El email es obligatorio';
    }else if(errors?.emailTomado){
      return 'El email ya fue tomado'
    }else if(errors?.pattern){
      return 'No tiene un formato de correo';
    }

    return 'Hola mundo';
  }

  constructor(private fb: FormBuilder,
              private validatorService: ValidatorService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre : 'Uriel Enrique',
      email : 'test1@test.com',
      username : 'juasjuas',
      password : '123456',
      confPass : '123456'
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
