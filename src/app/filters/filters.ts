// import { keys } from 'ts-transformer-keys';

export interface Option {
    value: string,
    label?: string
}

export interface Control {
    value: string,
    label: string,
    selectedOption?: Option,
    options: Option[],
    type: string
}

export function newOption(value: string, label?: string) {
    const option: Option = {
        value: value
    }
    if (label) {
        option.label = label;
    }
    return option;
}

export function newAllOption() {
    return newOption('all', 'All');
}

export function newDefaultOptions() {
    return [
        newAllOption(),
        newOption('optionA', 'Option A'),
        newOption('optionB', 'Option B')
    ];
}

export function newFilter(value: string, label: string, selectedOption: number, options: Option[], type?: string) {
    const filter: Control = {
        value: value,
        label: label,
        options: options,
        type: type ? type : 'select'
    }
    if (selectedOption !== null && selectedOption >= 0) {
        filter.selectedOption = filter.options[selectedOption];
    }
    return filter;
}

