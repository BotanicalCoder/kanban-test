export type States = 'pending' | 'inprogress' | 'done';
export type ModalStates = 'create' | 'edit' | 'delete' | '';
export type Task = {
  task: string;
  state: States;
  id: number;
};
