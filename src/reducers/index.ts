import { createReducer } from "typesafe-actions";
import { TodoAction, TodoState } from "../types";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/types";

const initialState: TodoState = [
  { id: 1, text: "공부", done: true },
  { id: 2, text: "산책", done: true },
  { id: 3, text: "잠", done: false },
];

const todos = createReducer<TodoState, TodoAction>(initialState, {
  [ADD_TODO]: (state, { payload: text }) => [
    ...state,
    {
      id: !state.length ? 1 : Math.max(...state.map((todo) => todo.id)) + 1,
      text,
      done: false,
    },
  ],
  [TOGGLE_TODO]: (state, { payload: id }) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ),
  [REMOVE_TODO]: (state, { payload: id }) =>
    state.filter((todo) => todo.id !== id),
});

export default todos;
