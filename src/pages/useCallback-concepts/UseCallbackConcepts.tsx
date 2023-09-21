/* eslint-disable no-trailing-spaces */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/keyword-spacing */
import { memo, useCallback, useState } from 'react'

interface NumbersType {
    nums: number[]
    addRandom: () => void
}

const Numbers = memo(({
    nums,
    addRandom
}: NumbersType) => {
    console.log('Numbers rendered')

    return(
        <div>
            <ul>
                {
                    nums.map((num, index) => (
                        <li key={index}>{num}</li>
                    ))
                }
            </ul>
            <button onClick={addRandom}>Add random</button>
        </div>
    )
})

const UseCallbackConcepts = () => {
    const [nums, setNums] = useState<number[]>([])
    const [count, setCount] = useState(0)
    const increaseCounter = () => {
        setCount(count + 1)
    }

    /**
     * Everytime the UseCallbackConcepts component re-renders, it will re-creates a function reference
     * for the addRandom callback.
     * 
     * Number component gets re-render since the props are different!
     * 
     * As a solution: Wrap addRandom with useCallback
     */
    const addRandom = useCallback(() => {
        let randNum = Math.floor((Math.random() * 1000, 10))
        setNums([...nums, randNum])
    }, [nums])

    return(
        <div>
            <div>
                Count: {count} &nbsp;
                <button onClick={increaseCounter}>+</button>
            </div>
            <hr />
            <Numbers nums={nums} addRandom={addRandom} />
        </div>
    )
}

export default UseCallbackConcepts
