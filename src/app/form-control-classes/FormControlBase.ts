export class FormControlBase<T> {
    value: T | undefined;
    defaultValue: T | undefined;
    disabled: boolean;
    placeholder: string;
    key: string;
    label: string;
    validations: { email?: boolean, required?: boolean, minLength?: number, maxLength?: number};
    order: number;
    controlType: string;
    type: string;
    options: { key: string, value: string }[];

    constructor(options: {
        value?: T;
        defaultValue?: T,
        disabled?: boolean,
        placeholder?: string;
        key?: string;
        label?: string;
        validations?: { email?: boolean, required?: boolean, minLength?: number, maxLength?: number};
        order?: number;
        controlType?: string;
        type?: string;
        options?: { key: string, value: string }[];
    } = {}) {
        this.value = options.value;
        this.defaultValue = options.defaultValue;
        this.disabled = options.disabled;
        this.placeholder = options.placeholder;
        this.key = options.key || '';
        this.label = options.label || '';
        this.validations = options.validations;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.options = options.options || [];
    }
}