import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Paper, Typography } from "@mui/material";
import MentorCard from "./mentorcard";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.primary.main,
    },
  },
});
export default function Mentor() {
  return (
    <Paper
      sx={{
        display: "flex",
        maxWidth: "97%",
        alignContent: "center",
        alignItems: "center",
        justifyItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(172deg, rgba(247,255,244,1) 9%, rgba(37,217,64,1) 100%)",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: "80vw",
          background: "white",
          display: "inline-flex",
          flexDirection: "column",
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
          borderRadius: "15%",
          p:4,
          
        }}
      >
        <Typography variant="h3">JOIN US AS A MENTOR</Typography>
        <Typography sx={{ padding: 2 }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dolorum
          corrupti earum voluptas odio, nihil dolorem iste inventore vero
          asperiores?
        </Typography>
        <Typography sx={{ padding:2 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          voluptatibus aliquid voluptate hic voluptatum nisi odio quia
          repellendus, et quidem eius nam nostrum sunt veritatis excepturi non
          suscipit. Sit sequi fuga repudiandae architecto odit tempore facilis
          deserunt dolores optio similique! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Sed, doloremque dolore nisi iure
          reiciendis reprehenderit. Quisquam perspiciatis officiis, cupiditate
          necessitatibus nihil quos vero et accusantium quod nobis corrupti
          doloribus perferendis.
        </Typography>
        <Box
          sx={{
            display: "inline-flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            justifyItems: "space-between",
          }}
        >
          <MentorCard
            title={"advantages"}
            source={
              "https://www.crio.do/static/29e81dbbb70990a0440efc58ec6f39d1/647c9/Three.webp"
            }
            content={
              "Learn with real work experience by building internship-grade projects, with world-class mentorship, in an actual developer environment."
            }
          
          />
          <MentorCard
            title={"Real Work Experience"}
            content={
              "Learn with real work experience by building internship-grade projects, with world-class mentorship, in an actual developer environment."
            }
            source={
              "https://www.crio.do/static/3c72c48b6a34bc82a62b3e2c98915fe9/647c9/Two.webp"
            }
          />
          <MentorCard title={'True, Project-based Learning'} content={'Learn Full-Stack development or Backend development through an immersive project-based curriculum focused on practical developer skills.'} source={'https://www.crio.do/static/4c17d31f8cebf378ce78055371413190/647c9/One.webp'} />
        </Box>
        <ThemeProvider theme={theme}>
              <Button color='primary' variant='contained' size='large'>
            APPLY FOR MENTOR </Button>
             </ThemeProvider>
       
      </Box>
    </Paper>
  );
}
