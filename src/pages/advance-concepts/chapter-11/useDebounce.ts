import {debounce} from 'lodash';
import { type debounceType } from 'pages/advance-concepts/chapter-11/types';
import { useEffect, useMemo, useRef } from 'react';

const useDebounce = (callBack: () => void) => {
    const ref = useRef<any>()

    useEffect(() => {
        ref.current = callBack
    }, [callBack])

    const debouncedCallback = useMemo(() => {
        const func = () => {
            ref.current?.()
        }

        return debounce(func, 1000)
    }, [])

    return debouncedCallback
}

export default useDebounce