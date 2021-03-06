import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Profile() {
  const [isMentor, setMentor] = React.useState(false);
  return (
    <Box
      sx={{
        display: "inline-flex",
        justifyContent: "center",
        width: "100%",
        height: { xs: "175vh", xl: "100vh" },
        background:
          " linear-gradient(0deg, rgba(61,207,44,1) 11%, rgba(52,125,92,1) 100%)",
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          justifyContent: "center",
          background: " white",
          height: { xs: "150vh", xl: "75vh" },
          borderRadius: { xs: "5%", xl: "20%" },
          m: 5,
          flexWrap: "wrap",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ paddingInline: 7, paddingBlock: { xl: 7, xs: 2 } }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{
              p: 7,
              width: { xl: "9vw", xs: "7vw" },
              height: { xl: "9vw", xs: "7vw" },
            }}
          />
        </Stack>
        <Box>
          <Typography variant="h5" sx={{ p: { xs: 3, xl: 3 } }}>
            Username
          </Typography>
          <Typography variant="body1" sx={{ p: { xs: 2, xl: 3 } }}>
            FirstName
          </Typography>

          <Typography variant="body1" sx={{ p: { xs: 3, xl: 3 } }}>
            LastName
          </Typography>
          {isMentor &&
          <Typography variant="body1" sx={{ p: { xs: 3, xl: 3 } }}>
            Followers
          </Typography>}
          

          <Typography variant="body1" sx={{ p: { xs: 3, xl: 3 } }}>
            Following
          </Typography>
          <Typography variant="body1" sx={{ p: { xs: 3, xl: 3 } }}>
            Description:
          </Typography>
          <Typography variant="body2" sx={{ p: 1, maxWidth: "30vh" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda,
            quis qui eos deserunt praesentium, id officia delectus molestiae,
            laudantium accusantium incidunt maiores. Quibusdam quia modi rem
            nulla, ratione tempore odio.
          </Typography>
          <Stack direction="row">
            {" "}
            <Link to="/update" style={{ textDecoration: "none" }}>
              <Button variant="contained" size="medium" color="success">
                Edit
              </Button>
            </Link>
            <Button variant="outlined" color="success" sx={{ marginLeft: 2 }}>
              Logout
            </Button>
          </Stack>
        </Box>{" "}
      </Box>
    </Box>
  );
}
