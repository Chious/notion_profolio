"use client";

import Image from "next/image";
import { Button, Box, Divider, Stack, Typography } from "@mui/material";
import BasicTabs from "./BasicTabs";
import Photo2 from "../../assets/images/profolio-picture.png";
import { BasicSkill } from "./ChildTabs";

export default function Protfolio() {
  return (
    <>
      <Stack sx={{ marginLeft: "120px", marginRight: "120px" }} spacing={4}>
        <Box>
          <Image
            alt=""
            src={Photo2}
            style={{
              position: "absolute",
              top: 200,
              right: 100,
              width: 350,
              height: 400,
              objectFit: "contain",
            }}
          />
          <Stack
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
            }}
            direction="column"
            spacing={2}
          >
            <h1>Nice to meet you!</h1>
            <h1>
              {`I'm `}
              <span style={{ borderBottom: "5px solid #4EE1A0" }}>
                {`Sam Chiou.`}
              </span>
            </h1>
            <p style={{ maxWidth: 520 }}>
              {`Based in the Taipei, I'm a front-end developer passionate about
              building web apps and slove user's problem.`}
            </p>
            <p>{`#Sociology #Front-end`}</p>
            <Button
              sx={{
                width: 150,
                borderBottom: 5,
                borderRadius: 0,
                borderColor: "#4EE1A0",
                color: "white",
              }}
            >
              CONTRACT ME
            </Button>
          </Stack>
        </Box>

        <Divider sx={{ background: "gray" }} />
        <BasicSkill />
      </Stack>
    </>
  );
}
