import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Box, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
 
  },
  textarea: {
    resize: "both",
  },
 
}));

export default function EditProfile() {
  const classes = useStyles();
  return (
    <Box
      sx={{
        display: "inline-flex",
        justifyContent: "center",
        width: "100%",
        height: { xs: "175vh", xl: "110vh" },
        background:
          " linear-gradient(0deg, rgba(61,207,44,1) 11%, rgba(52,125,92,1) 100%)",
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          justifyContent: "center",
          background: " white",
          height: { xs: "150vh", xl: "fit-content" },
          borderRadius: { xs: "5%", xl: "20%" },
          m: 5,
          flexWrap: "wrap",
          p: {xl:5,xs:2},
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{ paddingInline: 2, paddingBlock: { xl: 7, xs: 'none' },height:'fit-content' }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{
              p: 7,
              width: { xl: "9vw", xs: 15 },
              height: { xl: "9vw", xs: 15 },
              m:{xs:'none'}
              
            }}
            
          />
            <Button variant="outlined" color="success" sx={{ m:1 }}>
              Logout
            </Button>
          
        </Stack>
        <Box>
          <Typography variant="h5" sx={{ p: { xs: 1, xl: 7 } }}>
            Username
          </Typography>
          <Typography variant="body1" sx={{ p: { xs: 2, xl: 3 } }}>
            FirstName
          </Typography>
          <TextField
            label="Full Name"
            variant="filled"
            color="success"
            focused
            defaultValue={"Prithu"}
          />

          <Typography variant="body1" sx={{ p: { xs: 3, xl: 3 } }}>
            LastName
          </Typography>
          <TextField
            label="Full Name"
            variant="filled"
            color="success"
            focused
            defaultValue={"Srivastava"}
          />
          <Typography variant="body1" sx={{ p: { xs: 3, xl: 3 } }}>
            Following
          </Typography>
          <Typography variant="body1" sx={{ p: { xs: 3, xl: 3 } }}>
            Description:
          </Typography>
          <TextField
            id="outlined-textarea"
            label="description"
            placeholder="Placeholder"
            multiline
            color="success"
            variant="outlined"
            inputProps={{ className: classes.textarea }}
            defaultValue={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ab qui cumque harum delectus sapiente vero nam nulla quas perspiciatis?"
            }
          />

          {/* <TextField variant="body2" sx={{p:1,maxWidth:'30vh'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, quis qui eos deserunt praesentium, id officia delectus molestiae, laudantium accusantium incidunt maiores. Quibusdam quia modi rem nulla, ratione tempore odio.</TextField>          */}
          <Stack direction="row">
            {" "}
            <Link
              to="/update"
              style={{
                textDecoration: "none",
                background: "success",
               
              }}
            >
              <Button variant="contained" size="medium" color="success" sx={{m:1}}>
                save
              </Button>
            </Link>
            <Button variant="outlined" color="success" sx={{ m:1 }}>
              Logout
            </Button>
          </Stack>
        </Box>{" "}
      </Box>
    </Box>
  );
}
