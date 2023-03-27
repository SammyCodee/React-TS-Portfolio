export interface ISelectProps<TValue> {
    values: Readonly<TValue[]>;
    onChange: (value: TValue) => void;
    label: string;
    selected: string;
    required: boolean;
    displayLabel: (value: TValue) => string;
}

interface IBase {
    id: string;
}
export type Base = IBase | string;

export type Book = {
    id: string;
    title: string;
    author: string;
    value: string;
};
  
export type Movie = {
    id: string;
    title: string;
    releaseDate: string;
    value: string;
};

export type Laptop = {
    id: string;
    value: string;
    model: string;
    releaseDate: string;
}
