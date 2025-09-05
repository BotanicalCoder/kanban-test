import type { ModalStates } from "~/types";

export const DeleteTaskConfirmationModal = ({
  handleDeleteTask,
  setOpenModal,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<ModalStates>>;
  handleDeleteTask: () => void;
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleDeleteTask();
    setOpenModal("");
  };
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      {" "}
      <div className="w-full max-w-md p-4 bg-white rounded-lg">
        <h2 className="text-lg font-bold">Delete Task</h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="task"
              className="block text-sm font-medium text-gray-700"
            >
              Are you sure you want to delete this task?
            </label>
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
              Delete Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
