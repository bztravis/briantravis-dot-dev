import { useState, useEffect, useCallback } from 'react';

export default function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(getSavedValue(key, defaultValue));

  function getSavedValue(key: string, initialValue: T) {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  }

  const setSavedValue = useCallback((key: string, value: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(err);
    }
  }, []);

  function eraseFromStorage() {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    setSavedValue(key, value);
  }, [key, value, setSavedValue]);

  return [value, setValue, eraseFromStorage] as const;
}
