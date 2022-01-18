import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import React from "react";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function Downbar() {
  return (
    <Paper
      sx={{
        background: "rgb(3,23,24)",
        display: "inline-flex",
        justifyContent: "center",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ display: "inline-block", p: 3 }}>
        <FacebookIcon color="primary" sx={{ p: 1 }} />
        <GoogleIcon color="primary" sx={{ p: 1 }} />
        <TwitterIcon color="primary" sx={{ p: 1 }} />
        <YouTubeIcon color="primary" sx={{ p: 1 }} />
        <InstagramIcon color="primary" sx={{ p: 1 }} />
        <LinkedInIcon color="primary" sx={{ p: 1 }} />
      </Box>
      <Box
        sx={{
          marginInline: 10,
          width: "100%",
          display: "inline-flex",
          justifyContent: "center",
        }}
      >
        <Typography color="primary" sx={{ maxWidth: "70vw" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          minima? Dignissimos omnis at autem expedita nam, error saepe
          assumenda. Quas quod, culpa sint quam iste necessitatibus aliquam
          dolorum nulla repellat modi quos voluptate possimus! Odit eligendi
          iste incidunt minus quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni.
        </Typography>
       
      </Box>
      <Typography variant='h5' color="primary" sx={{p:1}}>@Algoders2021</Typography>
    </Paper>
  );
};
