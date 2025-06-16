import { useState, useEffect } from "react";

/**
 * Custom hook to debounce a value.
 *
 * @param {*} value - The input value to debounce.
 * @param {number} delay - Delay in milliseconds (default: 300ms).
 * @returns {*} - Debounced value.
 */
function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    // Cleanup timeout if value or delay changes
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
