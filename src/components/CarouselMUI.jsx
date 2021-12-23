import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  Box,
  Grid,
} from "@mui/material"
import Carousel from "react-material-ui-carousel"

// (react-material-ui-carousel) is not good for using!!!
// need to find another
const CarouselMUI = ({ itemList }) => {
  return (
    // Carousel MUI
    <Box
      sx={{
        // textAlign: "center",
        // m: "auto",
        mt: 2,
        width: "100%",
        height: "100%",
      }}
    >
      <Carousel
        fullHeightHover={false} // We want the nav buttons wrapper to only be as big as the button element is
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: "cornflowerblue",
            borderRadius: 0,
          },
        }}
        // navButtonsWrapperProps={{
        //   // Move the buttons to the bottom. Unsetting top here to override default style.
        //   style: {
        //     bottom: "0",
        //     top: "unset",
        //   },
        // }}
      >
        {itemList?.map((item) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                mt: 10,
                mx: 2,
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              <Card>
                <CardContent>
                  <Typography
                    component="div"
                    variant="body2"
                    noWrap
                    gutterBottom
                  >
                    {item.id}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Box>
            <Box sx={{ height: "100%" }}>
              <Card>
                {/* CardMedia Img cannot be resize here */}
                {/* use img Tag to resize instead*/}
                <Box sx={{ width: 350, height: "auto" }}>
                  <img
                    src={item.url}
                    width={"100%"}
                    // height={"100%"}
                    // width={400}
                    // height={300}
                    object-fit="cover"
                  />
                </Box>
                {/* <CardContent>
                <Typography component="div" variant="body2" noWrap gutterBottom>
                  {item.id}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions> */}
              </Card>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  )
}

export default CarouselMUI
