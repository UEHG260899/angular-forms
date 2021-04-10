//se importan en el modulo que se van a usar
import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    //La manera en la que angular va a buscar a la directiva
    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validator {

    @Input() minimo!: number;

    constructor(){}

    validate(control: FormControl){
        const inputValue = control.value;

        return (inputValue < this.minimo) ? {'customMin' : true} : null;
    }
}