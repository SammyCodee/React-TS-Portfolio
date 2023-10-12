import {debounce} from 'lodash';
import { type debounceType } from 'pages/advance-concepts/chapter-11/types';
import { useEffect, useMemo, useRef } from 'react';

const useDebounce = (callBack: () => void) => {
    const ref = useRef<any>()

    useEffect(() => {
        //update ref.current with callBack
        //ref.current here will access to the latest callBack
        ref.current = callBack
    }, [callBack])

    /**
     * Create it only once - on mount
     */
    const debouncedCallback = useMemo(() => {
        // func will create only once - on mount
        const func = () => {
            //ref is mutable, it access to the latest callBack
            ref.current?.()
        }

        return debounce(func, 1000)

    }, [])

    return debouncedCallback
}

export default useDebounce