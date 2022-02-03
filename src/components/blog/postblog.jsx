

import AddIcon from "@mui/icons-material/Add";
import { IconButton } from '@mui/material';
import { makeStyles } from "@material-ui/core";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { FormControl } from '@mui/material';
import { Input } from '@mui/material';
import { FormLabel } from '@mui/material';


const useStyles = makeStyles(({
     locus: {
       "&:hover, &.Mui-focusVisible": { backgroundColor: "lightgreen" }
      , padding:20,borderRadius:'50%',background:'linear-gradient(0deg, rgba(61,207,44,1) 11%, rgba(52,125,92,1) 100%)'
     },
     textarea: {
          resize: "none",
          border:'none',
          minWidth:900,
          maxHeight:1000,
        },
     
     
   }));

const Postblog = () => {
     const classes=useStyles();
  return (
    <Box className="write" sx={{display:"flex",height:'80vh',justifyContent:'center',padding:'min(30,10vw)'}}>
      <FormControl className="writeblog">
        <Box className="fileinput" >
          <FormLabel htmlFor="iconbuttonfile">
               
            <IconButton   component="span">
              <AddIcon className={classes.locus}/>
            </IconButton>
          </FormLabel>
          <Input
            accept="image/*"
            className="input"
            id="iconbuttonfile"
            type="file"
            style={{display:'none'}}
           
          />
         <TextField 
      variant='filled'
      color='success'
        label="input title"
       sx={{width:{xl:'90ch',xs:'45ch'},marginInline:{xl:6},marginBlock:{xl:'15px'}}}
        /> 
        </Box>
        <TextField
            id="textarea"
            placeholder="Placeholder"
            multiline

            inputProps={{ className: classes.textarea }}
            defaultValue={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ab qui cumque harum delectus sapiente vero nam nulla quas perspiciatis?"
            }
          />
      </FormControl>
    </Box>
  );
};

export default Postblog;
