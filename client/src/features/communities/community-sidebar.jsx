//React Imports
import { useSelector } from "react-redux";

//MUI Imports
import {
  Box,
  Typography,
  Stack,
  Link,
  Divider,
  Avatar,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTheme } from "@mui/material/styles";

//App Imports
import { selectUsers } from "../../reducers/usersSlice";
import { selectCurrentCommunity } from "../../reducers/communitiesSlice";

/* ----------- COMPONENT -------------- */

const CommunitySidebar = (props) => {
  const theme = useTheme();
  const users = useSelector(selectUsers);
  const currentCommunity = useSelector(selectCurrentCommunity);



  return (
    <Stack
      id="sidebar"
      spacing={2}
      sx={{
        bgcolor: {
          xs: "background.paper",
          sm: "background.paper",
          md: "transparent",
        },
      }}
    >
      {/* ---> Title and Description <--- */}

      <Typography variant="h6">{currentCommunity?.name}</Typography>
      <Typography variant="body2">{currentCommunity?.headline}</Typography>
      <Divider sx={{ mt: "16px", mb: "16px" }} />

      {/* --->Links <--- */}

      <Link href={currentCommunity?.website} underline="hover">
        <LanguageIcon className="link-icon" />
        {"Website"}
      </Link>
      <Link href={currentCommunity?.twitter} underline="hover">
        <TwitterIcon className="link-icon" />
        {"Twitter"}
      </Link>
      <Link href={currentCommunity?.instagram} underline="hover">
        <InstagramIcon className="link-icon" />
        {"Instagram"}
      </Link>
      <Divider />

      {/* ---> Owner <--- */}

      <Typography variant="h7">Community admin</Typography>
      <Box sx={{display: "flex"}}>
      {currentCommunity?.members?.map((member, index) => {
        if (member.role === "admin" || member.role === "owner") {
          const owner = users.find((user) => user._id === member.userId);
          return (
            <Avatar
              style={{ border: `2px solid ${theme.palette.primary.light}`, marginRight:"10px" }}
              key={index}
              alt={owner?._id}
              src={owner?.image_url}
              sx={{ width: 48, height: 48 }}
            />
          );
        } else {
          return null
        }
      })}
      </Box>
      <Divider />

    </Stack>
  );
};

export default CommunitySidebar;
