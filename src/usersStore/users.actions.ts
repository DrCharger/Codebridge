import { Dispatch } from "redux";
import * as usersGateWays from "./users.gateWays";
import { UsersListAction } from "../types/users.types";
import { IMyArticle } from "../types/users.types";

export enum UserActionTypes {
  ARTICLE_LIST_RECIEVED = "ARTICLE_LIST_RECIEVED",
}

export const articleListRecieved = (list: IMyArticle[]): UsersListAction => {
  return {
    type: UserActionTypes.ARTICLE_LIST_RECIEVED,
    payload: {
      list,
    },
  };
};

export const getArticleList = (): any => {
  const thunkAction = function (dispatch: Dispatch) {
    usersGateWays
      .fetchUsersList()
      .then((userData) => dispatch(articleListRecieved(userData)));
  };
  return thunkAction;
};
