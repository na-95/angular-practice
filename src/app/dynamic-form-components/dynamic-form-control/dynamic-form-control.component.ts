import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlBase } from 'src/app/dynamic-form-helpers/FormControlBase';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.css']
})
export class DynamicFormControlComponent {

  constructor() { }

  @Input() control!: FormControlBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.control.key].valid; }
  get isTouched() { return this.form.controls[this.control.key].touched; }
}
