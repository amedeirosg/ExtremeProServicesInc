import React, { useRef, useEffect } from "react";

export default function useOutsideClick(ref:any) {
  useEffect(() => {
    function handleClickOutside(event:any) {
      if (ref.current && !ref.current.contains(event.target)) {
        const burgerMenu = document.getElementById("burgermenu");
        if (burgerMenu?.getAttribute("data-state") == "open")
          burgerMenu.setAttribute("data-state", "close");
      }
    } // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
