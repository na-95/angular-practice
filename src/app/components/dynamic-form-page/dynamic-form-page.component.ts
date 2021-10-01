import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControlBase } from 'src/app/dynamic-form-helpers/FormControlBase';
import { ControlsService } from 'src/app/services/controls.service';

@Component({
  selector: 'app-dynamic-form-page',
  templateUrl: './dynamic-form-page.component.html',
  styleUrls: ['./dynamic-form-page.component.css']
})
export class DynamicFormPageComponent implements OnInit {

  controls$: Observable<FormControlBase<any>[]>;

  constructor(private cs: ControlsService) {
    this.controls$ = cs.getControls();
  }

  ngOnInit(): void {
  }

}
