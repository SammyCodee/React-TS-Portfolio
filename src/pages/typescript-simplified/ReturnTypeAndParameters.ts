function checkLength(a: string, b: number){
    return a.length < b
}

type ReturnOfLengthCheck = ReturnType<typeof checkLength>

type ParamsType = Parameters<typeof checkLength>

/**
 * take certain index of the parameters' type
 */
type ParamsIndexType = Parameters<typeof checkLength>[1]
