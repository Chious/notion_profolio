"use client";

import skill from "./skill.json";
import { Grid, Card, Typography } from "@mui/material";

export const BasicSkill = () => {
  const skills = skill.map((e, i) => (
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
