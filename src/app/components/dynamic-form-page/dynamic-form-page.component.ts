import { Component } from '@angular/core';
import { ControlsService } from 'src/app/services/controls.service';

@Component({
  selector: 'app-dynamic-form-page',
  templateUrl: './dynamic-form-page.component.html',
  styleUrls: ['./dynamic-form-page.component.css']
})
export class DynamicFormPageComponent {

  controls: any[] = [];
  emittedFormValue: {};

  constructor(controlsService: ControlsService) {
    this.controls = controlsService.getNewControls();

    // setTimeout(() => {
    //   this.controls = controlsService.getNewControls();
    // }, 3000);
  }

  onSubmit(formValue: {}): void {
    this.emittedFormValue = formValue;
  }

}
