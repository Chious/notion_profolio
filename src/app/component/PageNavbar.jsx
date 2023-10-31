import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import fronticon from "../assets/images/icon-frontend-mentor.svg";
import githubicon from "../assets/images/icon-github.svg";
import linkedinicon from "../assets/images/icon-linkedin.svg";

import Link from "next/link";
import { Stack } from "@mui/material";

export default function PageAppBar() {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      elevation={0}
      style={{ position: "relative", zIndex: 1 }}
    >
      <AppBar position="static" sx={{ background: "none" }} elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {`Sam's Blog`}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link href="https://github.com/Chious">
              <Image className="icon" src={githubicon} alt="" />
            </Link>
            <Link href="https://www.frontendmentor.io/profile/Chious">
              <Image src={fronticon} alt="" />
            </Link>
            <Link href="www.linkedin.com/in/sam-chiou-51b2012">
              <Image src={linkedinicon} alt="" />
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
