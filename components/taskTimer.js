import PlayButton from "./svgs/playButton";
import PauseButton from "./svgs/pauseButton";

const TaskTimer = ({ task }) => {
  return (
    <div className="tasktimer">
      <div className="tasktime">
        <span>{task.time}</span>
      </div>
      <div className="tasktitle">
        <span>{task.title}</span>
      </div>
      <button className="lt-button">-</button>
      <div className="ss-button">
        <PlayButton className="ss-inner" />
      </div>
      <button className="rt-button">+</button>
    </div>
  );
};
export default TaskTimer;
