import { useEffect, useRef, useState } from 'react';

const useDebounce = (value, delay) => {
    /* eslint-disable no-unused-vars */

    const [debouncedValue, setDebouncedValue] = useState(value);
    const timeoutRef = useRef(null);

    useEffect(() => {
        clearTimeout(timeoutRef.current); // Clear the previous timeout

        // Set a new timeout to update the debounced value
        timeoutRef.current = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;
