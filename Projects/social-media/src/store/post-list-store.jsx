import { createContext, useReducer } from "react";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListProvider = ({ children }) => {
  const [postList, dsipathPostList] = useReducer();

  return <PostList.Provider value={[]}>{children}</PostList.Provider>;
};

export default PostListProvider;
