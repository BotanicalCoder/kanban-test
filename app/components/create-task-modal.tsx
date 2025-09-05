import type React from "react";
import { useState } from "react";
import type { ModalStates, States, Task } from "~/types";

export const CreateTaskModal = ({
  createTask,
  setOpenModal,
  taskState,
}: {
  createTask: (task: Task) => void;
  setOpenModal: React.Dispatch<React.SetStateAction<ModalStates>>;
  taskState: States;
}) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask({ task, state: taskState, id: Math.floor(Math.random() * 16) });
    setOpenModal("");
  };
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-4 bg-white rounded-lg">
        <h2 className="text-lg font-bold">Create Task</h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="task"
              className="block text-sm font-medium text-gray-700"
            >
              Add Task
            </label>
            <textarea
              name="task"
              id="task"
              className="block w-full px-4 py-2 mt-2 text-black text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={() => {
                setOpenModal("");
              }}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
