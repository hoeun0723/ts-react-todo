import { ActionType } from "typesafe-actions";
import * as actions from "../actions";

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
export type TodoAction = ActionType<typeof actions>;
export type TodoState = Todo[];
