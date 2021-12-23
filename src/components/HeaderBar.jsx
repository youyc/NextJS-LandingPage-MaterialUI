import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material"
// import "@fontsource/moo-lah-lah"

/* Import Component */
import LeftDrawer from "./LeftDrawer"

const HeaderBar = () => {
  return (
    <AppBar position="sticky" color="transparent" elevation={1}>
      <Toolbar sx={{ display: "flex" }}>
        {/* <LeftDrawer></LeftDrawer> */}
        {/* // backgroundColor: { xs: "green", md: "yellow" }, */}
        <Box
          sx={{
            mx: 1,
            display: "flex",
            flex: 1,
            justifyContent: "flex-start",
          }}
        >
          {/* useStyle cannot override original css value */}
          {/* use CSS style instead */}
          <Typography
            variant="h4"
            color="Black"
            style={{ fontFamily: "Moo Lah Lah", fontWeight: "500" }}
          >
            The Dog Api
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            justifyContent: "space-evenly",
          }}
        >
          <Button color="inherit">Home</Button>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Home</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <Button color="inherit">Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderBar

/* Note: To align flex items */
/* 
  - Parrent flex contains multiple flex 
  - Children flex must have {display: "flex", flex: 1, justifyContent: "flex-end"}
*/
