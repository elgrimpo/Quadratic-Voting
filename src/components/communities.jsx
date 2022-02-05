//React Imports
import React, { useContext } from "react";

//MUI Imports
import { Box, Card, CardMedia, Stack, CardActionArea, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";

//App Imports
import { DataContext } from "../contexts/data-context";

/* ----------- COMPONENT -------------- */

const Communities = (props) => {
  const { communities, currentCommunity, users } = useContext(DataContext);
  const theme = useTheme();

  return (
    <Box
      id="communities"
      sx={{
        bgcolor: "background.paper",
        boxShadow: "inset -3px 0px 4px 0px rgba(0, 0, 0, 0.2)",
        
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

      <Avatar 

      style={{ border: `2px solid ${theme.palette.primary.light}` }}
        alt={users[5]}
        src={users[5].image}
        sx={{ width: 54, height: 54, marginBottom:'16px' }}
      />
    </Box>
  );
};

export default Communities;
