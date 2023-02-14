import { FC, ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {TextField} from '@mui/material'
import { IDateField } from './interfaces/IDateField';
import PropTypes from 'prop-types'

export const TaskDateField:FC<IDateField>=(props):ReactElement=>{
    const { value=new Date(), disabled=false, onChange=(date)=>console.log(date) } = props;
    
return (
    <>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker 
        label="Select date"
        inputFormat='dd/MM/yyyy'
        value={value}
        disabled={disabled}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
    </>
)
}

TaskDateField.propTypes = {
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.instanceOf(Date)

}