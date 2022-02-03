import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import TemporaryDrawer from "./Drawer";
import { useState } from "react";
import { Link } from "react-router-dom";
const theme = createTheme({
  typography: {
    fontFamily: ["Russo One", "cursive"].join(","),
  },
});

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid() {
  const [state, setState] = useState(false);

  const handleLoginClick = (e) => {
    setState(true);
  };

  const handleClick = (e) => {
    setState(false);
  };

  return (
    <Paper
      sx={{
        maxWidth: "97%",
        flexGrow: 1,
        background: "white",
        boxShadow: "none",
        marginLeft: 2,
        paddingBlock: 4,
      }}
    >
      <Grid
        container
        spacing={12}
        justifyContent={{ lg: "center", xs: "center" }}
        sx={{
          background:
            "linear-gradient(172deg, rgba(247,255,244,1) 9%, rgba(37,217,64,1) 100%)",
          paddingBlock: 4,
          paddingInlineEnd: 2,
        }}
      >
        <Grid item>
          <Img
            alt="complex"
            src="https://media.nature.com/lw800/magazine-assets/d41586-019-00653-5/d41586-019-00653-5_16459152.jpg"
          />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid
            
            xs
            container
            justifyContent={{lg:'center',sm:'center'}}
            direction="row"
            spacing={0}
            sx={{ padding: "auto" }}
          >
            <Grid
           
              disableGutters
              item
              xs={12}
              sx={{
                background: "white",
                borderRadius: "15%",
                paddingInlineStart: 2,
                marginLeft: "min(1rem,4vw)"
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography
                  gutterBottom
                  variant="h2"
                  component="div"
                  sx={{
                    color: "darkgreen",
                    fontWeight: "bold",
                    p: 4,

                    maxWidth: "min(40rem,80vw)",
                    fontSize: "min(4rem,10vw)",
                  }}
                >
                  ALGODERS
                </Typography>
              </ThemeProvider>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ maxWidth: "min(40rem,80vw)", padding: 2 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                quasi rerum corporis, eius fugit numquam reprehenderit vero
                ducimus laboriosam in aliquid nostrum labore soluta architecto
                aut tempora similique consequatur est? Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Possimus adipisci aperiam
                rerum porro maxime ipsam doloribus asperiores eius quaerat non,
                nulla, eveniet reprehenderit cupiditate ratione vitae eaque id
                voluptate animi!
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ maxWidth: "min(40rem,80vw)", p: 2 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                quasi rerum corporis, eius fugit numquam reprehenderit vero
                ducimus laboriosam in aliquid nostrum labore soluta architecto
                aut tempora similique consequatur est? Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Possimus adipisci aperiam
                rerum porro maxime ipsam doloribus asperiores eius quaerat non,
                nulla, eveniet reprehenderit cupiditate ratione vitae eaque id
                voluptate animi!
              </Typography>
              <Stack spacing={2} direction="row" sx={{ p: 4 }}>
                <Button
                  variant="contained"
                  size="medium"
                  color="success"
                  onClick={handleLoginClick}
                  onClickCapture={handleClick}
                >
                  LOG IN
                </Button>
                {state && <TemporaryDrawer state={state} />}
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <Button variant="outlined" color="success">
                    SIGN UP
                  </Button>
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
