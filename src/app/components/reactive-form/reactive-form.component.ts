import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form: FormGroup;

  tempValue: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [''],
      age: [[]]
    })

    this.form.valueChanges.subscribe(v => console.log(v))
  }

  addItem = () => {
    let ages = this.form.controls.age.value;
    if (!ages)
      ages = [];
    ages.push(this.tempValue); // push your actutal string value
    this.form.controls.age.setValue(ages);
    this.tempValue = '';
  }

  removeItem = (index: number) => {
    let ages = this.form.value.age;
    if (ages.length > 0) {
      //let indexOf = optionValue.indexOf(removeValue); find the index number with your value.
      ages.splice(index, 1);
      this.form.controls.age.setValue(ages);

    }
  }


}
