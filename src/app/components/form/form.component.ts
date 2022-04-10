import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    if(changes.controls){
      changes.controls.currentValue.forEach(control => {
        this.form.addControl(
          control.key,
          new FormControl({
              value: control.value || control.defaultValue || null,
              disabled: control.disabled,
            },
            control.required && Validators.required
          )
        )
      });
    }
  }

  emitFormValue() {
    this.formValueEmitter.emit(this.form.value);
  }

}
