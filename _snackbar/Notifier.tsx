import { useEffect } from "react";
import { useSnackbar } from "notistack";
import { ISnack } from "../_types/snackbar.types";
import { snackbarRemove } from "../_actions/snackbar.actions";
import { store } from "../_store/store";

let displayed: string[] = [];

interface NotifierProps {
  snackbars?: ISnack[];
  dispatch: (action: any) => void;
}

const Notifier = ({ snackbars, dispatch }: NotifierProps): null => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = (id: string) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id: string) => {
    displayed = [...displayed.filter((key) => id !== key)];
  };

  useEffect(() => {
    snackbars?.forEach(
      ({ key, message, options = {}, dismissed = false }: ISnack) => {
        if (dismissed) {
          closeSnackbar(key);
          return;
        }
        if (displayed.includes(key)) return;
        enqueueSnackbar(message, {
          key,
          ...options,
          onClose: (event, reason, myKey) => {
            if (options.onClose) {
              options.onClose(event, reason, myKey);
            }
          },
          onExited: (event, myKey) => {
            dispatch(snackbarRemove(String(myKey)));
            removeDisplayed(String(myKey));
          },
        });
        storeDisplayed(key);
      }
    );
  }, [snackbars, closeSnackbar, enqueueSnackbar]);

  return null;
};

export default () => (
  <store.Consumer>{(value) => <Notifier {...value} />}</store.Consumer>
);
