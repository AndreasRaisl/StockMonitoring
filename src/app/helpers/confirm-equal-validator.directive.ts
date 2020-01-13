
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[compare]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmEqualValidatorDirective,
    multi: true
  }]
})
export class  ConfirmEqualValidatorDirective implements Validator {

  @Input('compare') controlNameToCompare: string;
  validate(control: AbstractControl): ValidationErrors  | null {
    const controlToCompare = control.root.get(this.controlNameToCompare);
    if(controlToCompare) {
      const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
        control.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }return controlToCompare && controlToCompare.value !== control.value ? {'compare': true} : null
    return null;
  }

}