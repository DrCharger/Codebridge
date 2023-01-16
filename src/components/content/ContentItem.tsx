import React from "react";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Flexer } from "src/styled/Flexer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { StyledSpan } from "src/styled/StyledSpan";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { HighLighter } from "src/components/highlight/Highlight";
import { ContentItemProps } from "../../types/prop.types";

const ContentItem: React.FC<ContentItemProps> = ({ el, filter }) => {
  const navigate = useNavigate();
  const timeFormat = moment().format("MMM Do YY");

  return (
    <Card onClick={() => navigate(`/${el.id}`)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={el.imageUrl}
          alt={"card"}
        />
        <CardContent sx={{ height: "260px" }}>
          <Flexer color={"grey"} height={"1em"} justify={"start"}>
            <CalendarMonthIcon
              fontSize={"small"}
              sx={{ mr: "10px" }}
              color={"disabled"}
            />
            <StyledSpan size="1em" color="lightgrey" padding="3px 0 0">
              {timeFormat}
            </StyledSpan>
          </Flexer>
          <HighLighter filter={filter} text={el.title} summary={el.summary} />
          <Flexer
            height="1.15em"
            margin="4% 0"
            justify="start"
            position="absolute"
          >
            <StyledSpan
              size="1.2em"
              color="#ffa500"
              weight="700"
              padding="3px 0 0"
            >
              Read More
            </StyledSpan>
            <ArrowForwardIcon sx={{ ml: "10px" }} fontSize={"small"} />
          </Flexer>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ContentItem;
