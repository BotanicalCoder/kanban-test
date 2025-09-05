import { useDrag } from "react-dnd";
import { BiSolidCommentEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import type { ModalStates, Task } from "~/types";

export const Card = ({
  tasks,
  setActiveTask,
  setOpenModal,
}: {
  tasks: Task;
  setActiveTask: React.Dispatch<React.SetStateAction<Task | null>>;
  setOpenModal: React.Dispatch<React.SetStateAction<ModalStates>>;
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    item: tasks,
  }));

  return (
    <div
      className={`flex flex-col items-start justify-center p-4 rounded-lg bg-gray-200 w-full ${isDragging ? "bg-blue-500" : ""}`}
      //@ts-ignore
      ref={drag}
    >
      <h6 className="text-sm text-gray-800">{tasks.task}</h6>
      <div className="flex justify-start items-center gap-4 mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded !flex !item-center !gap-2"
          onClick={() => {
            setOpenModal("edit");

            setActiveTask(tasks);
          }}
        >
          <p>
            <BiSolidCommentEdit className="text-lg inline-block" />{" "}
          </p>

          <p>Edit </p>
        </button>

        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded !flex !item-center gap-2"
          onClick={() => {
            setOpenModal("delete");

            setActiveTask(tasks);
          }}
        >
          <MdDeleteOutline className="text-lg" />
          <p>Delete</p>
        </button>
      </div>
    </div>
  );
};
