import { useCallback, useState } from 'react';

export const useToggle = () => {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return [open, toggle];
};
