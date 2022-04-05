import { useState, useEffect } from "react";

export default function useDebounce(initiallizeValue = "", delay = null) {
  const [debounceValue, setDebounceValue] = useState(initiallizeValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initiallizeValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initiallizeValue]);
  return debounceValue;
}
