import {
  Typography,
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material"

const GridList = ({ itemList }) => {
  return (
    <Box sx={{ m: "auto", width: "75%", height: "100%" }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
        {itemList?.map((item) => (
          <Grid item xs={3}>
            <Card sx={{ width: "100%", height: "100%" }}>
              {/* <img
              src={item.url}
              width={200}
              height={150}
              object-fit="contain"
              // srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
            /> */}
              <CardMedia component="img" height="150" image={item.url} />
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
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default GridList
