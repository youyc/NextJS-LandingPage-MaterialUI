import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  Box,
} from "@mui/material"
import Carousel from "react-material-ui-carousel"

// (react-material-ui-carousel) is not good for using!!!
// need to find another
const CarouselMUI = ({ itemList }) => {
  return (
    // Carousel MUI
    <Box
      sx={{
        m: "auto",
        width: "75%",
        height: "100%",
        mt: 5,
      }}
    >
      <Box sx={{ display: "inline-flex" }}>
        <Carousel
          fullHeightHover={false} // We want the nav buttons wrapper to only be as big as the button element is
          navButtonsProps={{
            // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
              backgroundColor: "cornflowerblue",
              borderRadius: 0,
            },
          }}
          navButtonsWrapperProps={{
            // Move the buttons to the bottom. Unsetting top here to override default style.
            style: {
              bottom: "0",
              top: "unset",
            },
          }}
        >
          {itemList?.map((item) => (
            <Card
              sx={{
                height: "100%",
                // display: "inline-block",
              }}
            >
              {/* CardMedia Img cannot be resize here */}
              {/* use img Tag to resize instead*/}
              <img
                src={item.url}
                width={500}
                height={300}
                object-fit="contain"
              />
              <CardContent>
                <Typography component="div" variant="body2" noWrap gutterBottom>
                  {item.id}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </Carousel>
      </Box>
    </Box>
  )
}

export default CarouselMUI
