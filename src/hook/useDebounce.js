import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    var [debounceValue, setdebounceValue] = useState(value);
    useEffect(() => {
        var handle = setTimeout(() => setdebounceValue(value), delay);

        return () => clearTimeout(handle);
        // eslint-disable-next-line
    }, [value]);

    return debounceValue;
}

export default useDebounce;
