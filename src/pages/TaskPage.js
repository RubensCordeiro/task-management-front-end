import { Route, Routes } from "react-router";
import GlobalContainer from "../components/UI/Layout/GlobalContainer";
import TaskHeader from "../components/Tasks/TaskHeader";
import TaskList from "../components/Tasks/TaskList";
import { useContext } from "react";
import { authContext } from "../contexts/authContext";

function TaskPage() {

  const { authenticated } = useContext(authContext);

  return (
    <GlobalContainer>
      <TaskHeader />

      <Routes>
        <Route>
          {authenticated && <>
            <Route index element={<TaskList />} />
            <Route path="/" element={<TaskList />} />
            <Route path="/urgent" element={<TaskList taskFilter={"urgent"} />} />
            <Route path="/late" element={<TaskList taskFilter={"late"} />} />
            <Route path="/today" element={<TaskList taskFilter={"today"} />} />
            <Route
              path="/tomorrow"
              element={<TaskList taskFilter={"tomorrow"} />}
            />
            <Route
              path="/next_week"
              element={<TaskList taskFilter={"next_week"} />}
            />
            <Route
              path="/finished"
              element={<TaskList taskFilter={"finished"} />}
            />
          </>}
        </Route>
      </Routes>
    </GlobalContainer>
  );
}

export default TaskPage;
