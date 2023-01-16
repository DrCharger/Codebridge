import React, { useMemo, useState } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { State } from "../../types/users.types";
import { getArticleList } from "src/usersStore/users.actions";
import ArticleAbout from "../about/ArticleAbout";
import { HomeRouterPropTypes } from "../../types/prop.types";
import { articleListSelector } from "src/usersStore/users.selectors";
import Home from "./Home";

const HomeRouter: React.FC<HomeRouterPropTypes> = ({ getList, list }) => {
  const [inputValue, setInputValue] = useState("");

  useMemo(() => {
    getList();
  }, [getList]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home list={list} value={inputValue} setValue={setInputValue} />
        }
      />
      <Route path={"/:id"} element={<ArticleAbout articleList={list} />} />
    </Routes>
  );
};

const mapState = (state: State) => {
  return {
    list: articleListSelector(state),
  };
};

const mapDispatch = {
  getList: getArticleList,
};
export default connect(mapState, mapDispatch)(HomeRouter);
