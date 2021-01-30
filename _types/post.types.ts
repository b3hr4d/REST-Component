import { FAILURE, REQUEST, SUCCESS } from ".";

export interface DefaultPostsState {
  data: IPost[];
  error: string;
  loading: boolean;
  nextLoad: number;
}
export interface DefaultPostState {
  data?: IPost;
  error: string;
  loading: boolean;
}

export interface IPost {
  id: number;
  title: string;
  content: string;
  slug: string;
  description: string;
  date: string;
  teacher: string;
  thumbnails: string;
  categories: string[];
  tags: string[];
}

export interface RequestPosts {
  type: typeof REQUEST.POSTS;
}
export interface SeccessPosts {
  type: typeof SUCCESS.POSTS;
  payload: {
    data: IPost[];
    nextLoad: number;
  };
}
export interface FailurePosts {
  type: typeof FAILURE.POSTS;
  error: string;
}

export interface RequestPost {
  type: typeof REQUEST.POST;
}
export interface SeccessPost {
  type: typeof SUCCESS.POST;
  data: IPost;
}
export interface FailurePost {
  type: typeof FAILURE.POST;
  error: string;
}

export type PostActionTypes =
  | RequestPosts
  | SeccessPosts
  | FailurePosts
  | RequestPost
  | SeccessPost
  | FailurePost;
