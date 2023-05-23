import React from "react";
import { Select, Option } from "./Select.styles";

interface SelectOption {
  value: number;
  label: string; 
}
interface Props {
  defaultValue?: string,
  instructionOption?: string,
  onChange: (value: number) => void,
  options: SelectOption[],
}

export const SelectComponent = ({
  defaultValue,
  instructionOption,
  options = [],
  onChange,
}: Props) => {

  const handleOnChange: React.ChangeEventHandler<HTMLSelectElement> = event => {
    const newValue = Number(event.target?.value);

    onChange(newValue) // pasa el evento para arriba
  }

  return (
    <Select onChange={handleOnChange} defaultValue={defaultValue}>
      {defaultValue 
        ? <Option value={defaultValue} disabled>{instructionOption}</Option>
        : null
      }
      {
        options.map(option => (
          <Option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </Option>
        ))
      }
    </Select>
  )
};

export default SelectComponent;
