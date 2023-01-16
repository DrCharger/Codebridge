import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledMainDiv } from "src/styled/Styled.Div";
import { StyledSpan } from "src/styled/StyledSpan";
import { loremArr } from "../../data/data";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Card, CardMedia, Typography } from "@mui/material";
import { ArticleAboutPropTypes } from "../../types/prop.types";

const ArticleAbout: React.FC<ArticleAboutPropTypes> = ({ articleList }) => {
  const param = useParams();
  const navigate = useNavigate();

  const finded = articleList.find((article) =>
    param.id === undefined ? null : article.id === +param.id
  );
  if (!finded) return null;

  return (
    <StyledMainDiv padding="0">
      <CardMedia
        component="img"
        height="250"
        image={finded.imageUrl}
        alt={"card"}
      />
      <Card
        sx={{
          position: "absolute",
          height: "80%",
          width: "80%",
          zIndex: "5",
          top: "10%",
          left: "10%",
          padding: "2%",
          overflow: "scroll",
          "::-webkit-scrollbar": { width: 0 },
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: "3%", fontWeight: "700" }}
        >
          {finded.title}
        </Typography>
        <article>
          <Typography
            variant="body2"
            sx={{ fontSize: "22px", mb: "20px", fontWeight: "600" }}
          >
            {finded.summary}
          </Typography>

          {loremArr.map((lorem) => (
            <Typography
              key={lorem.id}
              variant="body2"
              sx={{ fontSize: "20px", mb: "20px" }}
            >
              {lorem.text}
            </Typography>
          ))}
        </article>
      </Card>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        sx={{ position: "absolute", bottom: "45px", left: "10%" }}
        onClick={() => navigate(-1)}
      >
        <StyledSpan padding="3px 0 0"> Back to homepage</StyledSpan>
      </Button>
    </StyledMainDiv>
  );
};

export default ArticleAbout;
