import { Component } from "react"
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material"

const HeaderBar = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h5">
          <Box sx={{ fontWeight: "bold", m: 1 }}>Company Name</Box>
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
