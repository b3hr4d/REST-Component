import {
  SHOW_SNACKBAR,
  REMOVE_SNACKBAR,
  DefaultSnackState,
} from "../_types/snackbar.types";

export const snackbarShow = (snackbar: DefaultSnackState) => ({
  type: SHOW_SNACKBAR,
  snackbar: {
    ...snackbar,
  },
})

export const snackbarRemove = (key: string) => ({ type: REMOVE_SNACKBAR, key })
