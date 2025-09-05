# KanbanFlow: Intuitive Drag-and-Drop Task Management 🚀

## Overview

KanbanFlow is a modern, interactive web application designed to streamline task management using a classic Kanban board methodology. Built with TypeScript, React, and `react-router`, it offers a dynamic user experience with drag-and-drop functionality and local storage persistence.

## Features

- **Dynamic Kanban Board**: Visualize tasks across "Pending," "In Progress," and "Done" columns.
- **Task Creation**: Easily add new tasks to any column with a dedicated modal.
- **Task Management**: Edit existing tasks to update descriptions or details.
- **Task Deletion**: Remove tasks from the board when no longer needed.
- **Drag-and-Drop Interface**: Seamlessly move tasks between columns using `react-dnd` to update their status.
- **Local Persistence**: Task states and data are automatically saved to your browser's local storage.
- **Responsive Design**: A clean, modern UI powered by TailwindCSS, ensuring a great experience on various devices.

## Getting Started

To get a copy of the project up and running on your local machine, follow these steps.

### Installation

First, clone the repository to your local machine:

```bash
git clone <repository-url>
cd kanban-test
```

Then, install the project dependencies:

```bash
npm ci
```

### Running Locally (Development)

To start the development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

To create a production-ready build:

```bash
npm run build
```

To serve the built application:

```bash
npm run start
```

This will typically serve the application on `http://localhost:3000`.

### Running with Docker

You can also run the application using Docker for a containerized environment.

1.  Build the Docker image:
    ```bash
    docker build -t kanbanflow .
    ```
2.  Run the Docker container:
    ```bash
    docker run -p 3000:3000 kanbanflow
    ```
    The application will then be available in your browser at `http://localhost:3000`.

## Usage

Once the application is running, you will be presented with the Kanban board interface, divided into three columns: "Pending," "In Progress," and "Done."

### Adding a New Task

1.  Click the `➕` button in the header of the column where you want to add a task (e.g., "Pending").
2.  A "Create Task" modal will appear.
3.  Enter your task description in the text area.
4.  Click "Add Task" to save it. The task will appear in the selected column.

### Moving Tasks

1.  Click and hold a task card.
2.  Drag the card to another column (e.g., from "Pending" to "In Progress").
3.  Release the mouse button to drop the task. Its status will automatically update.

### Editing a Task

1.  On a task card, click the "Edit" button (represented by an edit icon).
2.  An "Edit Task" modal will appear.
3.  Modify the task description in the input field.
4.  Click "Edit Task" to save your changes.

### Deleting a Task

1.  On a task card, click the "Delete" button (represented by a trash can icon).
2.  A "Delete Task" confirmation modal will appear.
3.  Click "Delete Task" to permanently remove the task.

## Technologies Used

| Technology       | Description                                                 | Link                                                      |
| :--------------- | :---------------------------------------------------------- | :-------------------------------------------------------- |
| **TypeScript**   | Strongly typed superset of JavaScript                       | [TypeScript](https://www.typescriptlang.org/)             |
| **React**        | A JavaScript library for building user interfaces           | [React](https://react.dev/)                               |
| **React Router** | Declarative routing for React                               | [React Router](https://reactrouter.com/en/main)           |
| **React DND**    | Drag and Drop for React                                     | [React DND](https://react-dnd.github.io/react-dnd/about)  |
| **TailwindCSS**  | A utility-first CSS framework                               | [TailwindCSS](https://tailwindcss.com/)                   |
| **Vite**         | Next-generation frontend tooling                            | [Vite](https://vitejs.dev/)                               |

## Author Info

**[Okocha Chibueze Evans](https://github.com/chibueze-evans-okocha)**

Connect with me:

- Github: [@botanicalcoder](https://github.com/botanicalcoder)


## Badges

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

---

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
