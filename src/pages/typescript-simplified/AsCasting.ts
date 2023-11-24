type ExampleType = {
    title: string
}

fetch("sss").then(res => res.json()).then(data => {
    return data as ExampleType
}).then(todo => {
    console.log(todo.title)
})

/**
 * should rarely use the 'as' casting, 
 * it overrides TS, telling TS just trust me, 
 * the assumptions may be wrong.
 * Use it as a last resort
 */