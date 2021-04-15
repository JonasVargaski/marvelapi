import React, { useRef } from "react";
import PropTypes from "prop-types";
import Input from "./styles";

export function Search({ value, debounceTime, onChange, ...rest }) {
  const timerRef = useRef({});

  function setValueDebounce(e) {
    const text = e.target.value;

    if (timerRef.current?.timer) {
      clearTimeout(timerRef.current.timer);
    }

    timerRef.current.timer = setTimeout(() => {
      onChange(text);
    }, debounceTime);
  }

  return <Input defaultValue={value} onChange={setValueDebounce} {...rest} />;
}

Search.propTypes = {
  debounceTime: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
