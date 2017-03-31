type ListsById = {
  id?: number,
  name: string
};

// This is the model of our module state
export type State = {
  lists: number[],
  listsById: Array<ListsById>
};
