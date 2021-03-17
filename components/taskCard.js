import { useReducer, useRef } from "react";
import TextInput from "./textInput";

const TaskCard = ({ task, set }) => {
  const { title } = task;
  const [editting, toggleEdit] = useReducer((state, force) => {
    // return force ?? !state; // because syntax highliting
    return typeof force !== undefined ? force : !state;
  }, false);
  const editArea = useRef();
  const clickOut = (e) => {
    if (editting) {
      console.log("clickout", "event:", e, "ref:", editArea);
      toggleEdit(false);
    }
  };
  const finalise = (val) => toggleEdit(false) || set({ ...task, title: val });

  return (
    <li className="taskitem" onClick={clickOut}>
      <span className="taskEditArea" ref={editArea}>
        <span> [icon] </span>
        <span onClick={toggleEdit}>
          {editting ? (
            <TextInput text={title} finalise={finalise} />
          ) : (
            <span>{title}</span>
          )}
        </span>
      </span>
      <div className="bottom-row">
        [time] [remove] [restart] [compled] [elapsed]
      </div>
    </li>
  );
};

export default TaskCard;
