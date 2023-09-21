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
        /**
         * reference: https://blog.logrocket.com/react-usememo-vs-usecallback/
         */
        <div>
            <h3>
                Functions and objects are mutable.
                React uses JavaScript’s referential equality concept for comparing two identifiers.
                <br />
                Referential equality refers to comparing identifiers based on their references. 
                <br />
                For example, the following code snippet prints true two times since object and function references are equal:
                <br />
                let a = &#123;msg: &#39;Hello&#39;&#125;;
                <br />
                let b = a;
                <br />
                b.msg = &#39;World&#39;;
                <br />
                console.log(a === b); // true
                <br />
                let c = () =&gt; &#123;&#125;;
                <br />
                let d = c;
                <br />
                console.log(c === d); // true
            </h3>
            &nbsp;
            <hr />
            &nbsp;
            <h3>
                The following code snippet prints false two times even if identifier data look the same:
                <br />
                let a = &#123;msg: &#39;Hello&#39;&#125;;
                <br />
                let b = &#123;msg: &#39;Hello&#39;&#125;;
                <br />
                console.log(a === b); // false
                <br />
                let c = () =&gt; 100;
                <br />
                let d = () =&gt; 100;
                <br />
                console.log(c === d); // false
            </h3>
            <h3>
            Keep in mind that using them comes with a cost (memory usage for caching).
            </h3>
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
