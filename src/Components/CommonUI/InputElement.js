import React from "react";

const InputElement = ({
  inputName,
  value,
  label,
  type,
  onChange,
  checkUserExists
}) => {
  return (
    <div className="">
      <label className="control-label">{label}</label>
      <input
        onChange={onChange}
        onBlur={checkUserExists}
        value={value}
        type={type}
        name={inputName}
        className="form-control"
      />
    </div>
  );
};

export default InputElement;
