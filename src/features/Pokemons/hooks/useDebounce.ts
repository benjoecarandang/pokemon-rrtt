import { debounce } from "lodash";
import { useEffect, useState } from "react";

/**
 * Custom hook to debounce a value.
 * @param value - The value to debounce.
 * @param delay - The delay in milliseconds (default: 300ms).
 * @returns The debounced value.
 */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Create a debounced function to update the debounced value
    const debouncedFn = debounce(() => {
      setDebouncedValue(value);
    }, delay);

    // Call the debounced function
    debouncedFn();

    // Cleanup the debounced function on unmount or value/delay change
    return () => {
      debouncedFn.cancel();
    };
  }, [value, delay]);

  return debouncedValue;
}
