import React from "react";
import { Flexer } from "src/styled/Flexer";
import { StyledInput } from "src/styled/Styled.Input";
import { InputPropTypes } from "../../types/prop.types";
import { Search } from "@mui/icons-material";

const Input: React.FC<InputPropTypes> = ({ value, setValue }) => {
  return (
    <>
      <h3>Filter by keywords</h3>
      <Flexer width="600px" height="50px" margin="20px 0">
        <Search sx={{ position: "absolute", top: "30%", left: "3%" }} />
        <StyledInput
          placeholder="what you wonna find?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Flexer>
    </>
  );
};

export default Input;
