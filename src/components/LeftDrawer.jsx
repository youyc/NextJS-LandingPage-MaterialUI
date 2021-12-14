import { Drawer, Typography, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"

/* React component */
import { useState } from "react"

const useStyles = makeStyles(() => ({
  left_drawer: {
    width: 240,
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
      >
        Open Drawer
      </Button>
      <Drawer
        className={classes.left_drawer}
        achor="left"
        open={state}
        onClose={toggleDrawer(false)}
      >
        <div>
          <Typography variant="h3" color="initial">
            drawer
          </Typography>
        </div>
      </Drawer>
    </div>
  )
}

export default LeftDrawer
