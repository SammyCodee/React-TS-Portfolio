async function doSomething(){
    return 3
}

/**
 * Get the actual value of the function, since the function has the <Promise<T>>
 */
type Value = Awaited<ReturnType<typeof doSomething>>

/**
 * Awaited type is to remove the Promise
 */
type Async = Promise<string>

type Value2 = Awaited<Async>