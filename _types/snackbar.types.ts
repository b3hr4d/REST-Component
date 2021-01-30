import { TransitionProps } from "@material-ui/core/transitions/transition";
import { TransitionHandler, VariantType, TransitionCloseHandler, SnackbarOrigin } from "notistack/dist";

export const SHOW_SNACKBAR = "SHOW_SNACKBAR";
export const CLEAR_SNACKBAR = "CLEAR_SNACKBAR";
export const REMOVE_SNACKBAR = "REMOVE_SNACKBAR";

export interface DefaultSnackState {
  type?: string;
  snackbars?: ISnack[];
}
export type ISnack = {
  message: string;
  key: string;
  dismissed?: boolean;
  options: SnackOption;
};
interface SnackOption {
  TransitionComponent?: (props: TransitionProps) => JSX.Element;
  autoHideDuration?: number | null;
  anchorOrigin?: SnackbarOrigin;
  variant?: VariantType;
  action?: (key: string) => JSX.Element;
  onClose?: TransitionCloseHandler
  onExited?: TransitionHandler;
}
export interface SeccessSnackAction {
  type: typeof SHOW_SNACKBAR;
  snackbar: ISnack;
}
export interface ClearSnackAction {
  type: typeof CLEAR_SNACKBAR;
  dismissAll?: boolean;
  key?: string;
}
export interface RemoveSnackAction {
  type: typeof REMOVE_SNACKBAR;
  key: string;
}

export type SnackActionTypes =
  | SeccessSnackAction
  | ClearSnackAction
  | RemoveSnackAction;
