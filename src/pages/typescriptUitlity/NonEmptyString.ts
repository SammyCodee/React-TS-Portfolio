type nonEmptyString<T> = T extends '' ? never : T

interface catInfo {
    age: number;
    breed: string;
}

interface catColor {
    color: nonEmptyString<string>
}

interface catto extends catInfo, catColor {
    size: string
}

export const cat1: catto = {
    size: '',
    age: 1,
    breed: '',
    color: ''
}