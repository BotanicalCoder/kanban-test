import { use, useEffect, useState } from "react";
import type { ModalStates, States, Task } from "~/types";
import { useDrop } from "react-dnd";
import { CreateTaskModal } from "~/components/create-task-modal";
import { DeleteTaskConfirmationModal } from "~/components/delete-task-modal";
import { Card } from "~/components/card";
import { EditTaskModal } from "~/components/edit-task-modal";
import { CgFileAdd } from "react-icons/cg";

export function HomeComponent() {
  const [openModal, setOpenModal] = useState<ModalStates>("");
  const [taskState, setTaskState] = useState<States>("pending");
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (window) {
      window.localStorage.getItem("tasks")
        ? setTasks(JSON.parse(window.localStorage.getItem("tasks")!))
        : setTasks([]);
    }
  }, []);

  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const updateTask = (task: Task) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return { ...t, task: task.task };
        }
        return t;
      })
    );

    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const handleOpenModal = (modal: ModalStates) => {
    setOpenModal(modal);
  };

  const handleOpenCreateModal = (taskState: States) => {
    handleOpenModal("create");
    setTaskState(taskState);
  };

  const handleCreateTask = (task: Task) => {
    setOpenModal("");
    setTasks([...tasks, task]);
    window.localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  };

  const handleDeleteTask = () => {
    setOpenModal("");
    const filteredTasks = tasks.filter((task) => task.id !== activeTask?.id);
    setTasks(filteredTasks);
    window.localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  };

  const handleEditTask = (taskDescription: string) => {
    updateTask({
      state: taskState,
      id: activeTask?.id!,
      task: taskDescription,
    });

    setOpenModal("");
  };

  const getTasksByState = (state: string) => {
    return tasks.filter(
      (task) => task.state?.toLowerCase() === state?.toLowerCase()
    );
  };

  const moveTask = ({ state, task }: { state: States; task: Task }) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return { ...t, state };
        }
        return t;
      })
    );
  };

  //@ts-ignore
  const [_a, dropInProgressRef] = useDrop({
    accept: "TASK",
    drop: (item: Task) => moveTask({ task: item, state: "inprogress" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  //@ts-ignore
  const [_b, dropDoneRef] = useDrop({
    accept: "TASK",
    drop: (item: Task) => moveTask({ task: item, state: "done" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <main className="flex flex-col items-center justify-center pt-16 p-4">
      <div className="flex justify-center items-center gap-8">
        <h2 className="text-xl font-bold my-4">Welcome to the Kanban Board</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-8 px-4">
        <div className="grid grid-cols-1 bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-center items-center gap-8 mb-6">
            <h4 className="text-lg text-gray-800 font-medium">Pending</h4>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                handleOpenCreateModal("pending");
              }}
            >
              <CgFileAdd />
            </button>
          </div>

          <div className="flex flex-col items-start gap-4">
            {getTasksByState("pending").map((task) => (
              <Card
                setActiveTask={setActiveTask}
                setOpenModal={setOpenModal}
                tasks={task}
                key={task.id}
              />
            ))}
          </div>
        </div>

        <div
          className="grid grid-cols-1 bg-gray-50 p-4 rounded-lg"
          //@ts-ignore
          ref={dropInProgressRef}
        >
          <div className="flex justify-center items-center gap-8 mb-6">
            <h4 className="text-lg text-gray-800 font-medium">Inprogress</h4>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                handleOpenCreateModal("inprogress");
              }}
            >
              <CgFileAdd />
            </button>
          </div>

          <div className="flex flex-col items-start gap-4">
            {getTasksByState("inprogress").map((task) => (
              <Card
                setActiveTask={setActiveTask}
                setOpenModal={setOpenModal}
                tasks={task}
                key={task.id}
              />
            ))}
          </div>
        </div>

        <div
          className="grid grid-cols-1 bg-gray-50 p-4 rounded-lg"
          //@ts-ignore
          ref={dropDoneRef}
        >
          <div className="flex justify-center items-center gap-8  mb-6">
            <h4 className="text-lg text-gray-800 font-medium">Done</h4>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                handleOpenCreateModal("done");
              }}
            >
              <CgFileAdd />
            </button>
          </div>

          <div className="flex flex-col items-start gap-4">
            {getTasksByState("done").map((task) => (
              <Card
                setActiveTask={setActiveTask}
                setOpenModal={setOpenModal}
                tasks={task}
                key={task.id}
              />
            ))}
          </div>
        </div>
      </div>

      {openModal === "create" && (
        <CreateTaskModal
          createTask={handleCreateTask}
          setOpenModal={setOpenModal}
          taskState={taskState}
        />
      )}

      {openModal === "delete" && (
        <DeleteTaskConfirmationModal
          handleDeleteTask={handleDeleteTask}
          setOpenModal={setOpenModal}
        />
      )}

      {openModal === "edit" && (
        <EditTaskModal
          handleEditTask={handleEditTask}
          setOpenModal={setOpenModal}
        />
      )}
    </main>
  );
}
