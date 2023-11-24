function sum(nums: number[]): number
function sum(a: number, b: number): number
function sum(a: number | number [], b?: number){
    if(Array.isArray(a)){
        return a.length
    }

    if(b != null){
        return a + b
    }
}

const s1 = sum([1,2])
const s2 = sum(1,2)
/**
 * This is gonna show the error as it is incorrect usage
 *
 */
// const s3 = sum([1,2], 3)