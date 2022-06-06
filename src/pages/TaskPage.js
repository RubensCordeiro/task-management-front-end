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
        </Route>
      </Routes>
    </section>
  );
}

export default TaskPage;
