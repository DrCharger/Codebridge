import { IMyArticle } from "../types/users.types";
import { StyledSpan } from "src/styled/StyledSpan";

export const lighter = (
  string: string,
  regexp: RegExp,
  matchValue: RegExpMatchArray | null
) => {
  return string.split(regexp).map((el, index) => (
    <span key={el + index}>
      {el}
      <StyledSpan backColor="#FFFF00">
        {/* you could choose any color*/}
        {matchValue !== null ? matchValue[index] : ""}
      </StyledSpan>
    </span>
  ));
};

export const filtering = (list: IMyArticle[], value: string) => {
  const filteredTitle = list.filter((el) =>
    el.title.toLowerCase().includes(value.toLowerCase())
  );
  const filteredSummary = list.filter((el) =>
    el.summary.toLowerCase().includes(value.toLowerCase())
  );

  const mySet = Array.from(new Set([...filteredTitle, ...filteredSummary]));
  return mySet;
};

export const slicer = (
  list: IMyArticle[],
  currentPage: number,
  postsPerPage: number
) => {
  const indexOfLastItem = currentPage * postsPerPage;
  const indexOfFirstItem = indexOfLastItem - postsPerPage;
  const currentItem = list.slice(indexOfFirstItem, indexOfLastItem);

  return currentItem;
};
