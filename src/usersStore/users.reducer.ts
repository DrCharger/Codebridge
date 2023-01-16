import { UserActionTypes } from "./users.actions";
import { ArticleList, ALLActions } from "../types/users.types";

const initialState: any = {
  articleList: [],
};

const usersReducer = (
  state = initialState,
  action: ALLActions
): ArticleList => {
  switch (action.type) {
    case UserActionTypes.ARTICLE_LIST_RECIEVED:
      return {
        ...state,
        articleList: action.payload.list,
      };
    default:
      return state;
  }
};

export default usersReducer;
