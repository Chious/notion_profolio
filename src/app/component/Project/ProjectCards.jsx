"use client";

import { useState } from "react";
import { Card, Grid, Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "mui-image";

export const ProjectCardNew = ({ data }) => {
  const { cover, Name, LivePage, Code, Tags } = data;
  const [isHovered, setHover] = useState(false);

  const printtag = Tags.map((e, i) => {
    return (
      <p
        key={i}
        style={{
          color: "#D9D9D9",
          fontWeight: "200",
          fontSize: "18px",
          height: 30,
          margin: 0,
          background: "none",
          border: "2px solid none",
          borderRadius: "5px",
        }}
      >
        {e.name}
      </p>
    );
  });

  return (
    <>
      <Grid item md={6} lg={6} sm={12}>
        <Card sx={{ background: "none" }} elevation={0}>
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
                  height: "100%",
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
                  <Link
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
                  </Link>
                  <Link
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
                  </Link>
                </div>
              </Box>
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
        </Card>
      </Grid>
    </>
  );
};
