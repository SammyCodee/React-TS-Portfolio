export interface InputFieldType {
    label: string;
    type: string;
    required: boolean;
    value: string;
    eventHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}