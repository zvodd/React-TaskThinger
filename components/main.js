import { useEffect, useReducer, useRef, useState } from "react";
import TaskTimer from "./taskTimer";
import TaskCard from "./taskCard";

const initializeTasks = (zeta) => {
  const ob = Object.fromEntries(
    [
      "Assume control",
      "Beget aesthetic",
      "Continue ascension",
      ""
    ].map((x, i) => [i, { title: x, time: 10, icon: "star" }])
  );
  zeta(ob);
};

const Main = () => {
  const [tasks, setTasks] = useState({});
  const replaceTask = ([key, value]) => {
    setTasks({ ...tasks, ...{ [key]: value } });
  };

  useEffect(() => initializeTasks(setTasks), []);
  useEffect(() => console.log("Tasks ∆"), [tasks]);

  return (
    <div className="appwrap">
      <div style={{ position: "absolute", right: "0", margin: "2em" }}>
        <pre> {JSON.stringify(Object.entries(tasks), null, 2)}</pre>
      </div>

      <div>Task Thinger.</div>
      <TaskTimer task={tasks?.[0] || "00:00"} />
      <div>
        <ul className="tasklist">
          {/* <pre> {JSON.stringify(Object.entries(tasks), null, 2)}</pre> */}
          {Object.entries(tasks).map(([num, task]) => (
            <TaskCard
              key={num}
              task={task}
              set={(v) => {
                // console.log("tk", num, v);
                replaceTask([num, v]);
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
