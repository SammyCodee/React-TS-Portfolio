type Todo = {
    title?: string;
    completed: boolean;
    date: string;
    address?: {
        street?: string
    }
}

/**
 * all types in FormTodo is now optional
 */
type FormTodo = Partial<Todo>

type CarTodo = Required<Todo>

/**
 * Make specific property required and optional
 */
type PersonTodo = Required<Pick<Todo, "address">> & Omit<Todo, "date">

const personData: PersonTodo = {
    address:{
        street: "abc"
    },
    completed: true
}

type RequirePick<T, K extends keyof T> = Required<Pick<T, K>> & T

const requireTodo: RequirePick<Todo, "title"> = {
    title: "Man",
    completed: true,
    date: "1111"
}

type PartialPick<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>

const partialTodo: PartialPick<Todo, "completed"> = {
    date: '333'
}