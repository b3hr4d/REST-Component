
export const REQUEST = {
  POST: "REQUEST_POST",
  POSTS: "REQUEST_POSTS",
} as const;
export const SUCCESS = {
  POST: "SUCCESS_POST",
  POSTS: "SUCCESS_POSTS",

} as const;
export const FAILURE = {
  POST: "FAILURE_POST",
  POSTS: "FAILURE_POSTS",
} as const;

export const post = {
  request: REQUEST.POSTS,
  success: SUCCESS.POSTS,
  failure: FAILURE.POSTS,
  api: "/lesson/v2/guide",
};

export const posts = {
  request: REQUEST.POSTS,
  success: SUCCESS.POSTS,
  failure: FAILURE.POSTS,
  api: "/lesson/v2/guide",
};
