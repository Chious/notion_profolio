import { Grid, Box } from "@mui/material";
import project from "./project.json";
import ProjectCards from "./ProjectCards";

export default function Project() {
  var projects = project.map((e, i) => {
    return <ProjectCards data={e} key={i} />;
  });

  return (
    <>
      <Box sx={{ marginLeft: "120px", marginRight: "120px" }}>
        <h1>Projects</h1>
        <Grid container spacing={1}>
          {projects}
        </Grid>
      </Box>
    </>
  );
}
