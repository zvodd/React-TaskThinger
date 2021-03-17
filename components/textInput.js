import { useEffect, useRef } from "react";

const TextInput = ({ key, text, finalise }) => {
  const textinp = useRef(text);
  const hFocusOut = () => {
    if (typeof textinp?.current?.value === "string") {
      finalise(textinp.current.value);
    }
  };
  useEffect(() => {
    textinp.current.focus();
    textinp.current.addEventListener("focusout", hFocusOut);
    // return () => textinp.current?.removeEventListener("focusout", hFocusOut);
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        finalise(textinp.current.value);
      }}
    >
      <input
        type="text"
        placeholder="Task..."
        defaultValue={text}
        ref={textinp}
      />
    </form>
  );
};

export default TextInput;
