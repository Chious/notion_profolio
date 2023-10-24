import Image from "next/image";
import { Button, Box, Divider, Card, Grid } from "@mui/material";
import skill from "./skill.json";
import Photo from "../../assets/images/image-profile-desktop.webp";

export default function Protfolio() {
  const skills = skill.map((e, i) => (
    <Grid item md={4} lg={4} sm={12} key={i}>
      <Card sx={{ background: "none" }} elevation={0}>
        <h2>{e.skill}</h2>
        <p>{e.description}</p>
      </Card>
    </Grid>
  ));

  return (
    <>
      <Box sx={{ marginLeft: "120px", marginRight: "120px" }}>
        <Box>
          <Image
            alt=""
            src={Photo}
            style={{
              position: "absolute",
              top: 0,
              right: 120,
              width: 250,
              height: 400,
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <h1>Nice to meet you!</h1>
            <h1>
              {`I'm`}
              <span style={{ borderBottom: "5px solid #4EE1A0" }}>
                {`Adam Keyes.`}
              </span>
            </h1>
            <p style={{ maxWidth: 520 }}>
              {`Based in the UK, I'm a front-end developer passionate about
              building accessible web apps that users love.`}
            </p>
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
          </div>
        </Box>

        <Divider sx={{ background: "gray" }} />
        <Grid container spacing={1}>
          {skills}
        </Grid>
      </Box>
    </>
  );
}
