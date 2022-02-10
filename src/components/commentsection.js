import React from "react";
import TextInput from '@mui/material/TextField';
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
    }
})

export default function CommentField() {
  const classes = useStyles()

return( 
<TextInput 
textAlign={'center'} 
placeholder="Comment section" />

)

  
};

