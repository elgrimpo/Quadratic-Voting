//React Imports
import React, { useContext } from "react";

//MUI Imports
import { Box, Card, CardMedia, Stack, CardActionArea } from "@mui/material";
import { useTheme } from "@mui/material/styles";

//App Imports
import { DataContext } from "../contexts/data-context";

/* ----------- COMPONENT -------------- */

const Communities = (props) => {
  const { communities, currentCommunity } = useContext(DataContext);
  const theme = useTheme();

  return (
    <Box id="communities"
      sx={{bgcolor: 'background.paper', boxShadow:'inset -3px 0px 4px 0px rgba(0, 0, 0, 0.2)'}}>
      <Stack
        sdirection="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
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
    </Box>
  );
};

export default Communities;
