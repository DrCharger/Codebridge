import React from "react";
import { StyledMainDiv } from "src/styled/Styled.Div";
import Input from "../inputForm/Input";
import Content from "../content/Content";
import { filtering } from "src/utilits/utilits";
import { HomePropTypes } from "../../types/prop.types";

const Home: React.FC<HomePropTypes> = ({ list, value, setValue }) => {
  const filteredSet = filtering(list, value);
  return (
    <StyledMainDiv>
      <Input value={value} setValue={setValue} />
      <Content info={filteredSet} perPage={6} filter={value} />
    </StyledMainDiv>
  );
};

export default Home;
