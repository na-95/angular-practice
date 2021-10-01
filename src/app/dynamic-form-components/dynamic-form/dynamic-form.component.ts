import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlBase } from 'src/app/dynamic-form-helpers/FormControlBase';
import { ToFormGroupService } from 'src/app/services/to-form-group.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() controls: FormControlBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private tfgs: ToFormGroupService) { }

  ngOnInit() {
    this.form = this.tfgs.toFormGroup(this.controls as FormControlBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
