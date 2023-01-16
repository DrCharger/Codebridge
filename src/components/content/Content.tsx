import Grid from "@mui/material/Grid";
import ContentItem from "./ContentItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { ContentPropsType } from "../../types/prop.types";
import { StyledDiv } from "src/styled/Styled.Div";
import { slicer } from "src/utilits/utilits";

const Content: React.FC<ContentPropsType> = ({ info, perPage, filter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(perPage);
  const currentItem = slicer(info, currentPage, perPage);

  return (
    <>
      <Stack spacing={2} sx={{ margin: "10px 0" }}>
        <Pagination
          count={Math.ceil(info.length / postsPerPage)}
          shape="rounded"
          page={currentPage}
          onChange={(e, value) => setCurrentPage(value)}
        />{" "}
      </Stack>
      <StyledDiv margin="20px 0" size="20px" bw="0 0 1px 0" bs="inset">
        Result: <b>{info.length}</b>
      </StyledDiv>
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 4, sm: 4, md: 6, lg: 8, xl: 14 }}
      >
        {currentItem.map((el) => (
          <Grid item md={4} sm={6} xs={12} key={el.id}>
            <ContentItem el={el} filter={filter} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Content;
