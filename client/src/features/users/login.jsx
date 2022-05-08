// React/Redux Imports
import React from "react";

// MUI Imports
import { Box, Button } from "@mui/material";

//App imports

/* ----------- COMPONENT -------------- */

const Login = () => {

  const handleClick = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <Box>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handleClick}
        sx={{marginLeft:'50%', marginTop:'50%'}}>

        Google Login
      </Button>
    </Box>
  );
};

export default Login;
