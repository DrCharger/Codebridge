import React from "react";
import { Typography } from "@mui/material";
import { wrapperHeaderStyle, wrapperStyle } from "src/styled/Flexer";
import { lighter } from "src/utilits/utilits";
import { HLPropTypes } from "../../types/prop.types";

export const HighLighter: React.FC<HLPropTypes> = ({
  filter,
  text,
  summary,
}): JSX.Element => {
  if (!filter) {
    return (
      <>
        <Typography sx={wrapperHeaderStyle}>{text}</Typography>
        <Typography sx={wrapperStyle}>{summary}</Typography>
      </>
    );
  }

  const regexp = new RegExp(filter, "ig");
  const matchTextValue = text.match(regexp);
  const matchSummaryValue = summary.match(regexp);

  return (
    <>
      <Typography sx={wrapperHeaderStyle}>
        {lighter(text, regexp, matchTextValue)}
      </Typography>
      <Typography sx={wrapperStyle}>
        {lighter(summary, regexp, matchSummaryValue)}
      </Typography>
    </>
  );
};
