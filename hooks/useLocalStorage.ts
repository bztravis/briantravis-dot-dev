import { useState, useCallback, SetStateAction } from 'react';

export default function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, internalSetValue] = useState<T>(getSavedValue());

  function getSavedValue() {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : defaultValue;
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  }

  const setValue = useCallback(
    (value: SetStateAction<T>) => {
      try {
        internalSetValue(value);
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

  return [value, setValue, eraseFromStorage] as const;
}
