import { IMyArticle } from "./users.types";

export type HomeRouterPropTypes = {
  getList: any;
  list: IMyArticle[];
};

export type HomePropTypes = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  list: IMyArticle[];
  value: string;
};

export type InputPropTypes = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export type HLPropTypes = {
  filter: string;
  text: string;
  summary: string;
};

export type ContentItemProps = {
  el: IMyArticle;
  filter: string;
};

export type ContentPropsType = {
  info: IMyArticle[];
  perPage: number;
  filter: string;
};

export type ArticleAboutPropTypes = {
  articleList: IMyArticle[];
};
