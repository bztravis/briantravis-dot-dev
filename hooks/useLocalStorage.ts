import { useState, useEffect, useCallback } from 'react';

export default function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(getSavedValue());

  function getSavedValue() {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : defaultValue;
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  }

  const setSavedValue = useCallback(
    (value: T) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (err) {
        console.error(err);
      }
    },
    [key]
  );

  function eraseFromStorage() {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    setSavedValue(value);
  }, [value, setSavedValue]);

  return [value, setValue, eraseFromStorage] as const;
}
