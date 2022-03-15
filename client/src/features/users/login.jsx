// React/Redux Imports
import React from "react";
import { GoogleLogin } from "react-google-login";

// MUI Imports
import { Box, Button, BottomNavigation } from "@mui/material";

//App imports
import { authorizeUser } from "../../api/index.js";

/* ----------- COMPONENT -------------- */

const Login = () => {
  const clientId =
    "732241602052-m94ll4444r5k2d4kdcovcbugv1onic50.apps.googleusercontent.com";

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
