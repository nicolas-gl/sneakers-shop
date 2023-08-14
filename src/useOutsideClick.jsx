import { useEffect, useRef } from 'react';

const useOutsideClick = (opened, closeCart) => {

  const ref = useRef(null);

  const handleClick = (e) => {
    if (ref.current
      && !ref.current.contains(e.target)
      && Array.from(e.target.children).find(el => (el === ref.current))
    ) {
      closeCart();
    }
  };

  useEffect(() => {
    if (opened) {
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      }
    };
  });

  return ref;
};


export default useOutsideClick;