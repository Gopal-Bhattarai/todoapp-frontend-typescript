import { FC, ReactElement } from "react";
import { Grid, Box, Alert, LinearProgress } from "@mui/material";
import { format } from "date-fns";
import { TaskCounter } from "../taskCounter/TaskCounter";
import { Status } from "../createTaskForm/enums/Status";
import { Task } from "../task/task";
import { useQuery } from "@tanstack/react-query";
import { sendApiRequest } from "../../helpers/sendApiRequest";
import { ITaskApi } from "./interfaces/ITaskApi";

export const TaskArea: FC = (): ReactElement => {
  const { error, isLoading, data, refetch } = useQuery(["tasks"], async () => {
    return await sendApiRequest<ITaskApi[]>(
      "http://localhost:3200/tasks",
      "GET"
    );
  });

  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>Status of Your Tasks As On {format(new Date(), "PPPP")}</h2>
      </Box>

      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter count={2} status={Status.todo} />
          <TaskCounter count={5} status={Status.inProgress} />
          <TaskCounter count={3} status={Status.completed} />
        </Grid>
        <Grid item display="flex" flexDirection="column" xs={10} md={8}>
          <>
            {error && (
              <Alert severity="error">
                There was an error fetching your tasks
              </Alert>
            )}

            {!error && Array.isArray(data) && data.length === 0 && (
              <Alert severity="warning">
                You do not have any tasks created yet. Start by creating some
                tasks
              </Alert>
            )}

            {isLoading ? (
              <LinearProgress />
            ) : (
              Array.isArray(data) &&
              data.length > 0 &&
              data.map((each, index) => (
                <Task
                  key={each.id + index}
                  id={each.id}
                  title={each.title}
                  description={each.description}
                  date={new Date(each.date)}
                  priority={each.priority}
                  status={each.status}
                />
              ))
            )}
          </>
        </Grid>
      </Grid>
    </Grid>
  );
};
