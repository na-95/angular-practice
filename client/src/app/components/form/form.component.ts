import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormControlBase } from 'src/app/classes/FormControlBase';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {

  form: FormGroup = new FormGroup({});
  @Input() controls: any [];
  @Output() formValueEmitter = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges): void {
    const { controls } = changes;

    if(controls){
      const { currentValue } = controls;
      currentValue.forEach((control: FormControlBase<any>) => {
        this.form.addControl(
          control.key,
          new FormControl({
              value: control.value || control.defaultValue || null,
              disabled: control.disabled,
            },
            this.getValidators(control)
          )
        )
      });
    }
  }

  getValidators(control: FormControlBase<any>): ValidatorFn[] {
    const validatorsFn = [];
    const { validations } = control;

    if(validations.required)
      validatorsFn.push(Validators.required);

    if(validations.email)
      validatorsFn.push(Validators.email);

    if(validations.minLength)
      validatorsFn.push(Validators.minLength(validations.minLength));

    if(validations.maxLength)
      validatorsFn.push(Validators.maxLength(validations.maxLength));

    return validatorsFn as ValidatorFn[];
  }

  emitFormValue() {
    this.formValueEmitter.emit(this.form.getRawValue());
  }

  resetForm(): void {
    const disabledControls = {};
    for(let control in this.form.controls){
      if (this.form.controls[control].status.toLowerCase() === 'disabled')
        disabledControls[control] = this.form.controls[control].value;
    }

    // clear form, except for disabled controls
    this.form.reset(disabledControls)
  }
}
