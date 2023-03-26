export interface ISelectProps<TValue> {
    values: TValue[];
    onChange: (value: TValue) => void;
    label: string;
    selected: string;
    required: boolean;
    titleKey?: keyof TValue;
}

export interface Base {
    id: string;
    value: string;
}

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