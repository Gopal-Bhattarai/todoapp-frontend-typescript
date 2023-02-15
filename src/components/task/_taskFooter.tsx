import { FC, ReactElement } from "react";
import {
  Box,
  FormGroup,
  FormControlLabel,
  Switch,
  Button,
} from "@mui/material";
import { ITaskFooter } from "./interfaces/ITaskFooter";
import PropTypes from 'prop-types'
import { Status } from "../createTaskForm/enums/Status";

export const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
    id,
    status,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;
  return (
    <Box display="flex" justifyContent="space-between" mt={4}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              onChange={(e) => onStatusChange(e, id)}
              color="warning"
              defaultChecked={status === Status.inProgress}
            />
          }
          label="In Progress"
        />
      </FormGroup>
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{
          color: "#ffffff",
        }}
        onClick={(e) => onClick(e, id)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
};