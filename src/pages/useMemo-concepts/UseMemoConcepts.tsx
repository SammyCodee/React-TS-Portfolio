/* eslint-disable no-trailing-spaces */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/keyword-spacing */

import { useState, useMemo } from 'react'

function calculateMagicNumber (n: number) {
    console.log('Costly calculation triggered.')
    let num = 1
    for (let i = 0; i < n + 1000000000; i++) {
        num += 123000
    }
    return Math.floor(num - num * 0.22)
}

export default function UseMemoConcepts () {
    const [nums, setNums] = useState<number[]>([])
    const [count, setCount] = useState<number>(1)
    const increaseCounter = () => {
      setCount(count + 1)
    }

    /**
     * Magic number will be calculated based on the count value
     * 
     * When user click the addRandom function, it will add a new random number to the nums list
     * 
     * Calculate magic number is costly, will feel delay 
     * 
     * A hidden issue: add random button works so slowly as it triggers a mandatory re-render
     * which triggers the calculateMagicNumber
     * 
     * Solution: wrap calculateMagicNumber with useMemo, so React use a cache value when
     * UseMemoConcepts re-renders via the add random button click
     */
    const addRandom = () => {
        let randNum = Math.floor((Math.random() * 1000))
        setNums([...nums, randNum])
    }

    const magicNum = useMemo(() => calculateMagicNumber(count), [count])
    console.log('magicNum: ', magicNum)
    return(
        <div>
            <div>
                Counter: {count} | Magic number: {magicNum} &nbsp;
                <button onClick={increaseCounter}>+</button>
            </div>
            <hr />
            <div>
                <ul>
                    {nums.map((num, index) => (
                        <li key={index}>{num}</li>
                    ))}
                </ul>
                <button onClick={addRandom}>Add random</button>
            </div>
        </div>
    )
}
