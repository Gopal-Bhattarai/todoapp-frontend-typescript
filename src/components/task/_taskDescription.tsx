import {FC, ReactElement } from 'react'
import {Box, Typography} from '@mui/material'
import { ITaskDescription } from './interfaces/ITaskDescription'
import PropTypes from 'prop-types'


export const TaskDescription:FC<ITaskDescription>=(props):ReactElement=>{
    const {description='No content'} = props;
    return (
            <Box>
                <Typography variant='body1'>
                    {description}
                </Typography>
            </Box>
        )
}

TaskDescription.propTypes = {
    description: PropTypes.string,
}