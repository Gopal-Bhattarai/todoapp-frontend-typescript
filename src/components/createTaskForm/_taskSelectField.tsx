import { FC, ReactElement } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  // SelectChangeEvent,
} from "@mui/material";
import PropTypes from 'prop-types'
import { ISelectField } from "./interfaces/ISelectField";

export const TaskSelectField: FC<ISelectField> = (props): ReactElement => {
  const { value='', label='Select Box', 
    name='selectBox', 
    items=[{value:'', label:'Add Items'}], 
    disabled = false, 
    onChange=(e)=>console.log(e) } = props;

  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}> {label} </InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        disabled={disabled}
      >
        {
        items.map((item, index)=>(
            <MenuItem key={item.value + index} value={item.value}>{item.label}</MenuItem>
        ))
        }

      </Select>
    </FormControl>
  );
};

TaskSelectField.propTypes = {
    onChange: PropTypes.func,
    label: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        }).isRequired
    )
}