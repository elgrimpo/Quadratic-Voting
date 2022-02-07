//React Imports
import React, { useContext } from "react";

//MUI Imports
import { Box, Card, CardMedia, Stack, CardActionArea, Avatar, Menu, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";

//App Imports
import { DataContext } from "../contexts/data-context";

/* ----------- COMPONENT -------------- */

const Communities = (props) => {
  const { communities, currentCommunity, users, currentUser } = useContext(DataContext);
  const theme = useTheme();

// Menu controls
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      id="communities"
      sx={{
        bgcolor: "background.paper",
        boxShadow: "inset -3px 0px 4px 0px rgba(0, 0, 0, 0.2)",
        width: '80px',
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: "center",
      }}
    >
      <Stack
        sdirection="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        {/* ---> Community Tiles <--- */}

        {communities.map((community) => (
          <Box
            key={community.id}
            sx={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
            }}
            style={
              community.id === currentCommunity.id
                ? { border: `4px solid ${theme.palette.primary.light}` }
                : {}
            }
          >
            <Card key={community.id} sx={{ maxWidth: 50, maxHeight: 50 }}>
              <CardActionArea key={community.id}>
                <CardMedia
                  component="img"
                  height="56"
                  image={community.image}
                  key={community.id}
                />
              </CardActionArea>
            </Card>
          </Box>
        ))}
      </Stack>

{/* ---> User profile <--- */}

<div>
      <Avatar 

      style={{ border: `2px solid ${theme.palette.primary.light}` }}
        alt={currentUser.name}
        src={currentUser.image}
        sx={{ width: 54, height: 54, marginBottom:'16px' }}
        onClick={handleClick}
      />


<Menu
          id="community-dropdown"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
</div>
    </Box>
  );
};

export default Communities;
