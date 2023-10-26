"use client";

import { Box, Grid, TextField, Button, Stack } from "@mui/material";
import PageAppBar from "../PageNavbar";
import { useState } from "react";
import AlertDialog from "./AlertDialog";

export default function Contract() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);

  async function sendFeedback() {
    try {
      const response = await fetch("http://localhost:3000/api/feedback");
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = () => {
    let checkName = name !== "";
    let checkEmail = email.match("[a-z0-9]+@[a-z]+.[a-z]{2,3}") !== null;

    if (checkName & checkEmail) {
      console.log("User Submit: ", {
        name: name,
        email: email,
        message: message,
      });
      setOpen(true);
      sendFeedback();
    }
  };

  return (
    <>
      <Box
        style={{
          background: "#242424",
          height: 450,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <div style={{ marginRight: "120px", marginLeft: "120px" }}>
          <Grid container sx={{ pt: 5 }} spacing={3}>
            <Grid item sm={12} md={6} lg={6}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <h1>Contract</h1>
                <p style={{ maxWidth: 400, textAlign: "center" }}>
                  {`I would love to hear about your project and how I could
                  help.Please fill in the form. and I'll get back to you as soon
                  as possible.`}
                </p>
              </Box>
            </Grid>
            <Grid item sm={12} md={6} lg={6}>
              <Stack direction="column" alignItems="end" spacing={2}>
                <TextField
                  helperText={name == "" ? "Full Name is required!" : ""}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={name == ""}
                  label="Name"
                  required
                  variant="standard"
                  InputLabelProps={{ style: { color: "white" } }}
                  style={{ width: 400 }}
                  sx={{
                    input: {
                      color: "#ffffff",
                      borderBottom: "1px solid #ffffff",
                    },
                  }}
                />

                <TextField
                  helperText={
                    email.match("[a-z0-9]+@[a-z]+.[a-z]{2,3}")
                      ? ""
                      : "Full email address is required!"
                  }
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={email.match("[a-z0-9]+@[a-z]+.[a-z]{2,3}") == null}
                  required
                  type="email"
                  label="Email"
                  variant="standard"
                  InputLabelProps={{ style: { color: "white" } }}
                  style={{ width: 400 }}
                  sx={{
                    input: {
                      color: "#ffffff",
                      borderBottom: "1px solid #ffffff",
                    },
                  }}
                />
                <TextField
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  label="Message"
                  variant="standard"
                  InputLabelProps={{ style: { color: "white" } }}
                  style={{ width: 400 }}
                  sx={{
                    input: {
                      color: "#ffffff",
                      borderBottom: "1px solid #ffffff",
                    },
                  }}
                />
                <Button
                  sx={{
                    width: 150,
                    borderBottom: 5,
                    borderRadius: 0,
                    borderColor: "#4EE1A0",
                    color: "white",
                  }}
                  onClick={handleSubmit}
                >
                  CONTRACT ME
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <AlertDialog open={open} setOpen={setOpen} />
          <PageAppBar style={{ width: "100vw" }} />
        </div>
      </Box>
    </>
  );
}
