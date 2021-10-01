import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlBase } from '../dynamic-form-helpers/FormControlBase';

@Injectable({
  providedIn: 'root'
})
export class ToFormGroupService {

  constructor() { }

  toFormGroup(controls: FormControlBase<string>[]) {
    const group: any = {};

    controls.forEach(control => {
      group[control.key] = control.required ? new FormControl(control.value || '', Validators.required) : new FormControl(control.value || '');
    });

    return new FormGroup(group);
  }

}
