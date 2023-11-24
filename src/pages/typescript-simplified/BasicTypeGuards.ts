type BasicType = {
    description?: string;
    dueDate: Date | string;
    priority: "High" | "Medium" | "Low"
}

function extendBasicType(val: BasicType){
    if(val.dueDate instanceof Date){
        console.log(val.dueDate.getDate())
    } else {
        console.log(val.dueDate.toUpperCase())
    }

    val.description?.length
    /**
     * or use the below
     */
    if(val.description){
        val.description.length
    }

    switch(val.priority){
        case "High":
            console.log(val.priority)
            break
        case "Medium":
            console.log(val.priority)
            break
        case "Low":
            console.log(val.priority)
            break
        default:
            //this is going to be a never type
            const exhaustiveCheck: never = val.priority;
            return exhaustiveCheck
        
    }
}

/**
 * the exclamation mark here stands for the return value will never be null
 * should use lesser as it is just like "any" type, it will override the typescript
 */
const formElement = document.querySelector<HTMLFormElement>(".form")!