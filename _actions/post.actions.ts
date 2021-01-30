import { REQUEST, SUCCESS, FAILURE } from "../_types";
import { errorHandler } from "../_snackbar/alert";
import { API } from "../_helpers/api";
import { store } from "../_store/store";

export const requestAllPost = () => {
  const { dispatch } = store;

  dispatch({ type: REQUEST.POSTS });

  API.get(`/post/v2`)
    .then((res) =>
      dispatch({
        type: SUCCESS.POSTS,
        payload: {
          data: res.data,
        },
      })
    )
    .catch((err) => errorHandler(err, FAILURE.POSTS));
};

export const requestPost = (id: number) => {
  const { dispatch } = store;

  dispatch({ type: REQUEST.POST });

  API.get(`/post/v2?id=${id}`)
    .then((res) => dispatch({ type: SUCCESS.POST, data: res.data[0] }))
    .catch((err) => errorHandler(err, FAILURE.POST));
};
