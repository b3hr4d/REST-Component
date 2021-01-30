import React from "react";
import { VariantType } from "notistack";
import { Close } from "@material-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { IconButton, Slide, Link, Button } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { UniqId } from "../_helpers/constants";
import { store } from "../_store/store";
import {
  ISnack,
  CLEAR_SNACKBAR,
  SHOW_SNACKBAR,
} from "../_types/snackbar.types";

export const errorHandler = (err: any, target?: any): void => {
  let error = err;
  let link;
  if (typeof err !== "string") error = err.response?.data.message.toString();
  if (error) {
    if (target) store.dispatch({ type: target, error });
    if (err.response?.data.button) link = err.response?.data.button;
    store.dispatch({
      type: SHOW_SNACKBAR,
      snackbar: snackBarMaker(error, "error", link),
    });
  }
};
export const loginErrorHandler = (target: any, message = "Please login!") => {
  errorHandler(
    {
      response: {
        data: {
          button: { url: "/login", msg: "Login" },
          message,
        },
      },
    },
    target
  );
};

export const seccessHandler = (err: any, target?: any): void => {
  let error = err;
  if (typeof err !== "string") error = err.response?.data.message.toString();
  if (target) store.dispatch({ type: target, error });
  store.dispatch({
    type: SHOW_SNACKBAR,
    snackbar: snackBarMaker(error, "success"),
  });
};
export const warningHandler = (err: any, target?: any): void => {
  let error = err;
  if (typeof err !== "string") error = err.response?.data.message.toString();
  if (target) store.dispatch({ type: target, error });
  store.dispatch({
    type: SHOW_SNACKBAR,
    snackbar: snackBarMaker(error, "warning"),
  });
};

export const snackBarMaker = (
  message: string,
  variant: VariantType,
  link?: { msg: string; url: string }
): ISnack => {
  return {
    message: message.replace(/<[^>]+>/g, ""),
    key: UniqId(),
    options: {
      TransitionComponent: (props: TransitionProps) => (
        <Slide {...props} direction="left" />
      ),
      anchorOrigin: { horizontal: "left", vertical: "bottom" },
      variant: variant,
      autoHideDuration: variant === "error" ? null : 5000,
      action: (key: string) => (
        <>
          {link && (
            <Link to={link.url} component={RouterLink}>
              <Button color="primary">{link.msg}</Button>
            </Link>
          )}
          <IconButton
            style={{ borderRadius: 5 }}
            color="inherit"
            size="small"
            aria-label="close"
            component="span"
            onClick={() =>
              store.dispatch({
                type: CLEAR_SNACKBAR,
                dismissAll: !key,
                key,
              })
            }
          >
            <Close />
          </IconButton>
        </>
      ),
    },
  };
};
