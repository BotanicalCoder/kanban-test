import { useState } from "react";
import type { ModalStates, Task } from "~/types";

export const EditTaskModal = ({
  handleEditTask,
  setOpenModal,
  currentTask,
}: {
  handleEditTask: (taskDescription: string) => void;
  setOpenModal: React.Dispatch<React.SetStateAction<ModalStates>>;
  currentTask: Task | null;
}) => {
  const [taskDescription, setTaskDescription] = useState<string>(
    currentTask?.task || ""
  );

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-200 w-full max-w-md">
        <h6 className="text-sm text-gray-800">Edit Task</h6>
        <textarea
          className="w-full p-2 rounded-lg border-2 border-gray-400 text-black"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <div className="flex justify-center items-center gap-4 mt-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              handleEditTask(taskDescription);
            }}
          >
            Edit Task
          </button>

          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setOpenModal("");
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
