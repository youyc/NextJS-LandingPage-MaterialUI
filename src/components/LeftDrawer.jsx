import { Drawer, Typography, Button, Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
// import { MenuIcon } from "@mui/icons-material"
import MenuIcon from "@mui/icons-material/Menu"
import MenuOpenIcon from "@mui/icons-material/MenuOpen"

/* React component */
import { useState } from "react"

const useStyles = makeStyles(() => ({
  menu_button: {},
  left_drawer: {
    width: 100,
  },
}))

const LeftDrawer = () => {
  const classes = useStyles()
  const [state, setState] = useState(false)

  const toggleDrawer = (open) => (event) => {
    setState(open)
  }

  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        color="secondary"
        variant="contained"
        startIcon={state ? <MenuOpenIcon /> : <MenuIcon />}
      ></Button>
      <Drawer
        className={classes.left_drawer}
        achor="left"
        open={state}
        onClose={toggleDrawer(false)}
      >
        <div>
          <Typography variant="body1" color="initial">
            drawer
          </Typography>
        </div>
      </Drawer>
    </div>
  )
}

export default LeftDrawer
