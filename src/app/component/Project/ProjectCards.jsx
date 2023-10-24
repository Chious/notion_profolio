"use client";

import { useState } from "react";
import { Card, Button, Grid, Box } from "@mui/material";
import Image from "next/image";
import logo1 from "../../assets/images/thumbnail-project-1-large.webp";
import logo2 from "../../assets/images/thumbnail-project-2-large.webp";
import logo3 from "../../assets/images/thumbnail-project-3-large.webp";
import logo4 from "../../assets/images/thumbnail-project-4-large.webp";
import logo5 from "../../assets/images/thumbnail-project-5-large.webp";
import logo6 from "../../assets/images/thumbnail-project-6-large.webp";

export default function ProjectCards({ data }) {
  const images = [logo1, logo2, logo3, logo4, logo5, logo6];
  const img = data.img;
  const title = data.title;
  const tag = data.tag;

  var printtag = tag.map((e, i) => {
    return (
      <p key={i} style={{ paddingRight: 10, height: 24, margin: 0 }}>
        {e}
      </p>
    );
  });

  var [isHovered, setHover] = useState(false);

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
                  height: "99%",
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
                  <Button
                    sx={{
                      color: "white",
                      padding: 0,
                      margin: 0,
                      width: 120,
                      borderBottom: 5,
                      borderRadius: 0,
                      borderColor: "#4EE1A0",
                    }}
                  >
                    View Project
                  </Button>
                  <Button
                    sx={{
                      color: "white",
                      padding: 0,
                      margin: 0,
                      width: 120,
                      borderBottom: 5,
                      borderRadius: 0,
                      borderColor: "#4EE1A0",
                    }}
                  >
                    View Code
                  </Button>
                </div>
              </Box>
            )}
            <Image
              alt=""
              src={images[img]}
              style={{
                height: "100%",
                width: "100%",
                position: "relative",
                zIndex: 0,
              }}
            />
          </div>
          <p style={{ color: "white" }}>{title}</p>
          <div
            style={{
              height: 24,
              display: "flex",
              flexDirection: "row",
              paddingBottom: 10,
            }}
          >
            {printtag}
          </div>
        </Card>
      </Grid>
    </>
  );
}
