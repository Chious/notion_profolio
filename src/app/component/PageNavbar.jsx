import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import fronticon from "../assets/images/icon-frontend-mentor.svg";
import githubicon from "../assets/images/icon-github.svg";
import linkedinicon from "../assets/images/icon-linkedin.svg";
import twittericon from "../assets/images/icon-twitter.svg";

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
            adamkeyes
          </Typography>
          <Image className="icon" src={githubicon} alt="" />
          <IconButton color="inherit">
            <Image src={fronticon} alt="" />
          </IconButton>
          <IconButton color="inherit">
            <Image src={linkedinicon} alt="" />
          </IconButton>
          <IconButton color="inherit">
            <Image src={twittericon} alt="" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
