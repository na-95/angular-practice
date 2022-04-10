import { Injectable } from '@angular/core';
import { DropdownControl } from '../form-control-classes/DropdownControl';
import { FormControlBase } from '../form-control-classes/FormControlBase';
import { TextboxControl } from '../form-control-classes/TextboxControl';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  getControls(): FormControlBase<any>[] {

    let controls: FormControlBase<any>[] = [
      new DropdownControl(
        {
          key: 'brave',
          label: 'Bravery Rating',
          options: [
            { key: 'solid', value: 'Solid' },
            { key: 'great', value: 'Great' },
            { key: 'good', value: 'Good' },
            { key: 'unproven', value: 'Unproven' }
          ],
          order: 3,
          controlType: 'dropdown'
        }
      ),

      new TextboxControl(
        {
          key: 'firstName',
          placeholder: 'First Name',
          label: 'First name',
          value: 'Bombasto',
          required: true,
          order: 1,
          controlType: 'textbox'
        }
      ),
    ]

    return controls.sort((a, b) => a.order - b.order);

  }

  getUpdatedControls(): FormControlBase<any>[] {

    let controls: FormControlBase<any>[] = [
      new DropdownControl(
        {
          key: 'brave',
          label: 'Bravery Rating',
          options: [
            { key: 'solid', value: 'Solid' },
            { key: 'great', value: 'Great' },
            { key: 'good', value: 'Good' },
            { key: 'unproven', value: 'Unproven' }
          ],
          value: 'unproven',
          order: 3,
          controlType: 'dropdown'
        }
      ),

      new TextboxControl(
        {
          key: 'firstName',
          placeholder: 'First Name',
          label: 'First name',
          value: 'Nouraiz',
          required: true,
          order: 1,
          controlType: 'textbox'
        }
      ),

      new TextboxControl(
        {
          key: 'secondName',
          placeholder: 'Second Name',
          label: 'Second name',
          value: 'Bombasto',
          required: true,
          order: 1,
          controlType: 'textbox'
        }
      ),

      new TextboxControl(
        {
          key: 'emailAddress',
          placeholder: 'Email',
          label: 'Email',
          value: 'nouraiz.asad@eonhealth.com',
          disabled: true,
          type: 'email',
          required: true,
          order: 2,
          controlType: 'textbox'
        }
      )
    ]

    return controls.sort((a,b) => a.order - b.order);

  }
}
