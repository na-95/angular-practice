import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DropdownControl } from '../dynamic-form-helpers/DropdownControl';
import { FormControlBase } from '../dynamic-form-helpers/FormControlBase';
import { TextboxControl } from '../dynamic-form-helpers/TextboxControl';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  constructor() { }

  getControls() {

    const controls: FormControlBase<string>[] = [

      new DropdownControl({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
      }),

      new TextboxControl({
        key: 'firstName',
        placeholder: 'First Name',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxControl({
        key: 'secondName',
        placeholder: 'Second Name',
        label: 'Second name',
        order: 1
      }),

      new TextboxControl({
        key: 'emailAddress',
        placeholder: 'Email',
        label: 'Email',
        type: 'email',
        required: true,
        order: 2
      })
    ];

    return of(controls.sort((a, b) => a.order - b.order));
  }
}
