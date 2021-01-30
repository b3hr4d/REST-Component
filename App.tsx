import React from "react";
import { requestAllPost } from "./_actions/post.actions";

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return <button onClick={() => requestAllPost()}></button>;
};
export default App;
