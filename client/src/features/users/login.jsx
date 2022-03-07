// React/Redux Imports
import React from "react";
import { GoogleLogin } from "react-google-login";

// MUI Imports
import { Box } from "@mui/material";

/* ----------- COMPONENT -------------- */

const Login = () => {

    const clientId = '732241602052-m94ll4444r5k2d4kdcovcbugv1onic50.apps.googleusercontent.com'

    const onSuccess = async (res) => {
        const result = res?.profileObj
        const token = res?.tokenId
    }

    const onFailure = (res) => {
        console.log(`Login failed,  ${res}`)
    }

  return (
    <Box>
      <GoogleLogin 
      clientId={clientId}
      buttonText='Login'
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
      />
    </Box>
  );
};

export default Login;
