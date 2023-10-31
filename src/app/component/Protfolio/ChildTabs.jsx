"use client";

import { skill, api, other } from "./skill.jsx";
import { Grid, Card } from "@mui/material";

export const BasicSkill = ({ type }) => {
  let data =
    type === "skill"
      ? skill
      : type === "api"
      ? api
      : type === "other"
      ? other
      : null;

  const skills = data.map((e, i) => (
    <Grid item md={4} lg={4} sm={12} key={i}>
      <Card sx={{ background: "none" }} elevation={0}>
        <h2>{e.skill}</h2>
        <p>{e.description}</p>
      </Card>
    </Grid>
  ));

  return (
    <Grid container spacing={1}>
      {skills}
    </Grid>
  );
};
