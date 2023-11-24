type APIResponse<TData> = {
    data: TData,
    isError: boolean
}

type UserResponse = APIResponse<{name: string, age: number}>

/**
 * 1st Method
 */
const userData: UserResponse = {
    data: {
        name: 'Bob',
        age:88
    },
    isError: false,

}

/**
 * 2nd Method 
 */
const blogData: APIResponse<{title: string}> = {
    data:{
        title: "Dancing Lions"
    },
    isError: false
}

/**
 * If the API res has some default values
 */
type carAPIResponse<TData = {status: number}> = {
    data: TData,
    isError: boolean
}

const carData: carAPIResponse = {
    data:{
        status: 200
    },
    isError: false
}

/**
 * This will overwrite the default value
 */
const carData_2: carAPIResponse<{name: string}> = {
    data:{
        name: "bmw"
    },
    isError: true
}

/**
 * Pass in type extends primitive type
 * 'extends' property is to constrain what your generic is going to be
 * in this case it is <object>
 * can also assign default value like 'status'
 */
type houseAPI<TData extends object = {status: number}> = {
    data: TData,
    isError: boolean
}

const houseData: houseAPI = {
    data:{
        status: 300
    },
    isError: true
}

/**
 * Tuple array
 */
function arrayToObj<T>(array: [string, T][]){
    const obj: {
        [index: string]: T
    } = {}

    array.forEach(([key, value]) => {
        obj[key] = value
    })

    return obj
}

const arr: [string, number | boolean][]= [
    ["keyOne", 1],
    ["keyTwo", 2],
    ["keyThree", true]
]

const obj = arrayToObj(arr)

/**
 * 
 * Async Function
 */
function wait(duration: number){
    return new Promise<string>(resolve => {
        setTimeout(() => resolve('Hi'), duration)
    })
}

wait(1000).then(value => {
    console.log(value.length)
})

/**
 * when using async, the return type is always Promise
 * the wait2 function returns <Response> type data which we can use json()
 * 
 */
async function wait2(duration: number){
    return await fetch("anything")
}

wait2(1000).then(value => {
    console.log(value.json())
})
