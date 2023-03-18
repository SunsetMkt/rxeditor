import { ISnapshot } from "../../interfaces";
import { Action, ActionType, BackupAction, SetUndoListAction } from "../actions";

export function undoListReducer(state: ISnapshot[], action: Action) {
  switch (action.type) {
    case ActionType.BACKUP: {
      return [...state, (action as BackupAction).payload]
    }
    case ActionType.SET_UNOLIST: {
      return (action as SetUndoListAction).payload
    }
  }
  return state
}