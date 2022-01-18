import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Paper sx={{ p: 5, margin: "auto", maxWidth: "100%", flexGrow: 1 ,boxShadow:'none'}}>
      <Grid container spacing={2} paddingTop={4}>
        <Grid
          item
          xs={12} md={6} lg={6}
          container
          direction="column"
          justifyContent={"center"}
          alignContent={"center"}
          sx={{
            background:
              "linear-gradient(172deg, rgba(247,255,244,1) 9%, rgba(37,217,64,1) 100%)",
            borderColor:
              "linear-gradient(172deg, rgba(202,255,166,1) 13%, rgba(20,68,4,1) 100%)",
            borderTopRightRadius: "18%",
            borderBottomRightRadius: "18%",
            borderTopLeftRadius: "15%",
            borderBottomLeftRadius: "15%",
            maxWidth: "90vw",
            p:4
          }}
        >
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            sx={{
              fontFamily: "cursive",
              fontWeight: "bold",
              color: "darkgreen",
              fontSize:'min(4rem,10vw)'
            }}
          >
            OBJECTIVE
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              maxWidth: "48vw",
              paddingBlock: "min(4vh,1rem)",
              paddingLeft: 4,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quasi
            rerum corporis, eius fugit numquam reprehenderit vero ducimus
            laboriosam in aliquid nostrum labore soluta architecto aut tempora
            similique consequatur est? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Possimus adipisci aperiam rerum porro maxime ipsam
            doloribus asperiores eius quaerat non, nulla, eveniet reprehenderit
            cupiditate ratione vitae eaque id voluptate animi!
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              maxWidth: "48vw",
              paddingBlock: "min(10%,2rem)",
              paddingLeft: 4,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quasi
            rerum corporis, eius fugit numquam reprehenderit vero ducimus
            laboriosam in aliquid nostrum labore soluta architecto aut tempora
            similique consequatur est? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Possimus adipisci aperiam rerum porro maxime ipsam
            doloribus asperiores eius quaerat non, nulla, eveniet reprehenderit
            cupiditate ratione vitae eaque id voluptate animi!
          </Typography>
        </Grid>

        <Grid item>
          <Item>
            {" "}
            <Img
              alt="complex"
              src="https://leverageedu.com/blog/wp-content/uploads/2019/09/Career-Objective.jpg"
            />
          </Item>
        </Grid>
      </Grid>
    </Paper>
  );
}
