import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent {

  constructor() { }

  @Input() control: any;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.control.key].valid; }
  get isTouched() { return this.form.controls[this.control.key].touched; }
}
