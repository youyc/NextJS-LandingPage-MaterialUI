import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material"
// import "@fontsource/moo-lah-lah"

/* Import Component */
import LeftDrawer from "./LeftDrawer"

const HeaderBar = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <LeftDrawer></LeftDrawer>
        <Typography variant="h5" color="yellow">
          <Box style={{ fontFamily: "Moo Lah Lah" }} sx={{ m: 1 }}>
            The Dog Api
          </Box>
        </Typography>
        <Typography>
          <Box sx={{ fontWeight: "bold", m: 1 }}>1st</Box>
        </Typography>
        <Typography sx={{ flexGrow: 1 }}>
          <Box sx={{ fontWeight: "bold", m: 1 }}>2nd</Box>
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderBar
