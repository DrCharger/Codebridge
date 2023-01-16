import { UserActionTypes } from "../usersStore/users.actions";

export interface IMyArticle {
  id: number;
  featured: boolean;
  default: false;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches?: [];
  events?: [];
}

export interface ArticleList {
  articleList: IMyArticle[];
}

export interface State {
  articleList: { articleList: IMyArticle[] };
}

export interface UsersListAction {
  type: UserActionTypes.ARTICLE_LIST_RECIEVED;
  payload: { list: IMyArticle[] };
}

export type ALLActions = UsersListAction;
