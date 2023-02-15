import {
  createContext,
  FC,
  ReactElement,
  PropsWithChildren,
  useState,
} from "react";

export const TaskStatusChangedContext = createContext({
  updated: false,
  toggle: () => {},
});

export const TaskStatusChangedContextProvider: FC<PropsWithChildren> = (
  props
): ReactElement => {
  const [updated, setUpdate] = useState(false);

  function toggleHandler() {
    updated ? setUpdate(false) : setUpdate(true);
  }

  return (
    <TaskStatusChangedContext.Provider
      value={{ updated, toggle: toggleHandler }}
    >
      {props.children}
    </TaskStatusChangedContext.Provider>
  );
};
