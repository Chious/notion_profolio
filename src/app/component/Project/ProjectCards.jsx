"use client";

import { useState } from "react";
import { Card, Grid, Box, Button, Stack, Skeleton } from "@mui/material";
import Link from "next/link";
import Image from "mui-image";

export const ProjectCardNew = ({ data }) => {
  const [load, setLoad] = useState(false);
  const { cover, Name, LivePage, Code, Tags } = data;
  const [isHovered, setHover] = useState(false);

  const handleLoad = () => {
    setLoad(true);
  };

  const printtag = Tags.map((e, i) => {
    return (
      <Button
        key={i}
        style={{
          color: "#D9D9D9",
          fontWeight: "200",
          fontSize: "18px",
          height: 30,
          margin: 0,
          background: "#343434",
          border: "2px solid none",
          borderRadius: "5px",
          fontFamily: "Space Grotesk, sans-serif",
        }}
      >
        {e.name}
      </Button>
    );
  });

  return (
    <>
      <Grid item md={6} lg={6} sm={12}>
        <Stack sx={{ background: "none" }} elevation={0} spacing={1}>
          <div
            className="Image"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            {isHovered && (
              <Box
                className="overlay"
                style={{
                  zIndex: 1,
                  width: "100%",
                  height: "370px",
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  background: "rgb(36 36 36 / 50%)",
                  justifyContent: "center",
                  boxSizing: "content-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <a
                    style={{
                      color: "white",
                      padding: 0,
                      margin: 0,
                      width: 120,
                      borderBottom: "5px solid",
                      borderRadius: 0,
                      borderColor: "#4EE1A0",
                      textAlign: "center",
                    }}
                    href={LivePage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                  <a
                    style={{
                      color: "white",
                      padding: 0,
                      margin: 0,
                      width: 120,
                      borderBottom: "5px solid",
                      borderRadius: 0,
                      borderColor: "#4EE1A0",
                      textAlign: "center",
                    }}
                    href={Code}
                  >
                    View Code
                  </a>
                </div>
              </Box>
            )}
            {!load && (
              <Skeleton
                variant="rectangular"
                width="100%"
                height="370px"
                sx={{ bgcolor: "gray" }}
              />
            )}

            <Image
              alt=""
              src={cover}
              style={{
                position: "relative",
                zIndex: 0,
              }}
              width="100%"
              height="370px"
              fit="cover"
              duration={0}
              onLoad={handleLoad}
            />
          </div>
          <p style={{ color: "white" }}>{Name}</p>
          <div
            style={{
              height: "50px",
              display: "flex",
              flexDirection: "row",
              gap: "5px",
            }}
          >
            {printtag}
          </div>
        </Stack>
      </Grid>
    </>
  );
};
