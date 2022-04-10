import { Component } from '@angular/core';
import { ControlsService } from 'src/app/services/controls.service';

@Component({
  selector: 'app-dynamic-form-page',
  templateUrl: './dynamic-form-page.component.html',
  styleUrls: ['./dynamic-form-page.component.css']
})
export class DynamicFormPageComponent {

  controls: any[] = [];
  emittedFormValue: {} = null;

  constructor(controlsService: ControlsService) {
    this.controls = controlsService.getUpdatedControls();
    // setTimeout(() => this.controls = controlsService.getUpdatedControls(), 3000);
  }

  onSubmit(formValue: {}): void {
    this.emittedFormValue = formValue;
    setTimeout(() => this.emittedFormValue = null, 5000);
  }

}
