import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";
import { useApp } from "@/app/contexts/AppContext";

export default function PaginationRounded({ componentRef }) {
  const { project, setDisplayProject, displayProject, filterProject } =
    useApp();

  const pageNum = Math.ceil(filterProject.length / 6);

  const handleClick = (e) => {
    const page = e.target.textContent;

    const startIndex = (page - 1) * 6;
    const endIndex = page * 6;

    setDisplayProject(project.slice(startIndex, endIndex));
    console.log("page Num: ", pageNum);
    console.log("display Num:", displayProject.length);
  };

  return (
    <Stack justifyContent="center" alignItems="center">
      <Pagination
        count={pageNum}
        variant="outlined"
        color="success"
        sx={{
          width: "350px",
          background: "rgba(255,255,255,0.9)",
          p: 1,
        }}
        onClick={(e) => {
          handleClick(e);
          componentRef.current?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      />
    </Stack>
  );
}
