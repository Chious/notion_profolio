"use client";

import { Grid, Box, Skeleton } from "@mui/material";
import { ProjectCardNew } from "./ProjectCards";
import FetchFromNotion from "./FetchFromNotion";
import { useEffect, useState } from "react";

export default function Project() {
  const [notionData, setNotionData] = useState();
  useEffect(() => {
    FetchFromNotion().then((data) => setNotionData(data));
  }, []);

  return (
    <>
      <Box sx={{ marginLeft: "120px", marginRight: "120px" }}>
        <h1>Projects</h1>
        <Grid container spacing={1}>
          {notionData ? (
            notionData.map((data, i) => <ProjectCardNew data={data} key={i} />)
          ) : (
            <Skeleton variant="rectangular" width={210} height={60} />
          )}
        </Grid>
      </Box>
    </>
  );
}
