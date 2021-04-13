import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this._formBuilder.group({
    nombre : ['', [Validators.required, Validators.minLength(3)]],
    favoritos : this._formBuilder.array([
      ['Metal Gear', Validators.required],
      ['GTA V', Validators.required]
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this._formBuilder.control('', Validators.required);

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  campoValido(campo : string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
    this.nuevoFavorito.reset();
  }

  borrarFavorito(indice: number){
    this.favoritosArr.removeAt(indice);
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return;
    }

    //this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ) );
    this.favoritosArr.push( this._formBuilder.control(this.nuevoFavorito.value, Validators.required) )
    this.nuevoFavorito.reset();
  }

}
