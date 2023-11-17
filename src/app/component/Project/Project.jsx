"use client";

import { Grid, Box, Skeleton, Stack } from "@mui/material";
import { ProjectCardNew } from "./ProjectCards";
import FetchFromNotion from "./FetchFromNotion";
import { useEffect, useRef, useState } from "react";
import PaginationRounded from "./Pagination";
import { useApp } from "@/app/contexts/AppContext";
import SearchBar from "./SearchBar";

export default function Project() {
  const { setProject, displayProject, setDisplayProject, setFilterProject } =
    useApp();

  useEffect(() => {
    FetchFromNotion().then((data) => {
      setProject(data);
      setFilterProject(data);
      setDisplayProject(data.slice(0, 6));
    });
  }, []);

  // set Ref while click pagnation
  const componentRef = useRef(null);

  /* componentRef.current?.scrollIntoView({
    behavior: "smooth",
  }) */

  return (
    <>
      <Box sx={{ marginLeft: "120px", marginRight: "120px" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <h1 ref={componentRef}>Projects</h1>
          <SearchBar />
        </Stack>
        <Grid container spacing={1}>
          {displayProject.length !== 0 ? (
            displayProject.map((data, i) => (
              <ProjectCardNew data={data} key={i} />
            ))
          ) : (
            <Skeleton variant="rectangular" width={210} height={60} />
          )}
        </Grid>
        <PaginationRounded componentRef={componentRef} />
      </Box>
    </>
  );
}
