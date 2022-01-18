import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ResponsiveAppBar from "../navbar";
import PostCard from "./posts";
import { Avatar, Container } from "@mui/material";
import Tags from "./searchbar";

const drawerWidth = 400;
let category='tech';

export default function PermanentDrawer() {
  return (
    <Box sx={{ display: "flex", }}>
      <CssBaseline />
      <Box disableGutters={true} sx={{ width: {xl:`calc(100% - ${drawerWidth}px)`,xs:'100%', p:'none',m:'none'}  }}>
        {" "}
        <ResponsiveAppBar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p:{xl: 3 ,},paddingInline:5}}
        >
          <Toolbar />
          <Box sx={{p:4,display:{xl:'none',xs:'block'}}}> </Box>

          <Box sx={{ marginLeft: { xl: 70 } }}>
            {" "}
            <PostCard />
          </Box>
        </Box>
      </Box>
      <Drawer
        sx={{display:{xl:'block',xs:'none'},
                   width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: {xl:drawerWidth,xs:0},
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar />
        <Typography variant="h5" fontFamily="cursive" sx={{ ml: 7 }}>
          Categories
        </Typography>
        <Divider sx={{ marginBottom: 5 }} />
        <Tags />

        <Divider />
        <List>
          <Typography variant="h6" sx={{ ml: { xl: 7 } }}>
            Top Mentors
          </Typography>
          {["Harshit", "Mohit ", "Nishant", "Siddhart"].map((text, index) => (
            <ListItem button key={text}>
              <Avatar src="/broken-image.jpg" sx={{ marginInline: 1 }} />
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
