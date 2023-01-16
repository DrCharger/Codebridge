import { State } from "../types/users.types";

export const articleListSelector = (state: State) =>
  state.articleList.articleList;
