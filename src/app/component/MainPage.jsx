"use client";

import PageNavbar from "./PageNavbar";
import Protfolio from "./Protfolio/Protfolio";
import Project from "./Project/Project";
import Contract from "./Contract/Contract";
import { Box } from "@mui/material";
import { useRef } from "react";
import { AppProvider } from "../contexts/AppContext";

export default function Mainpage() {
  const componentRef = useRef(null);

  return (
    <>
      <div
        className="bg-primary overflow-hidden"
        style={{ width: "100vw", background: "#151515" }}
      >
        <PageNavbar />
        <AppProvider>
          <Box>
            <Protfolio componentRef={componentRef} />
            <Project />
            <Contract style={{ margin: 0 }} ref={componentRef} />
          </Box>
        </AppProvider>
      </div>
    </>
  );
}
