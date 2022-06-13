import { Route, Routes } from "react-router";
import TaskHeader from "../components/Tasks/TaskHeader";
import TaskList from "../components/Tasks/TaskList";

function TaskPage() {
  return (
    <section>
      <TaskHeader />

      <Routes>
        <Route>
          <Route index element={<TaskList />} />
          <Route path="/:page" element={<TaskList />} />
          <Route
            path="/urgent/:page"
            element={<TaskList taskFilter={"urgent"} />}
          />
          <Route
            path="/late/:page"
            element={<TaskList taskFilter={"late"} />}
          />
          <Route
            path="/today/:page"
            element={<TaskList taskFilter={"today"} />}
          />
          <Route
            path="/tomorrow/:page"
            element={<TaskList taskFilter={"tomorrow"} />}
          />
          <Route
            path="/next_week/:page"
            element={<TaskList taskFilter={"next_week"} />}
          />
          <Route
            path="/finished/:page"
            element={<TaskList taskFilter={"finished"} />}
          />
        </Route>
      </Routes>
    </section>
  );
}

export default TaskPage;
