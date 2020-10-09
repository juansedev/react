import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardActionArea, CardMedia } from "@material-ui/core";
import CardContentCmp from "../components/cardContent.js";
import CardActionsCmp from "../components/cardActions.js";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                      url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    height: 500,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  blogContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function cardCmp({
  alt_comment,
  image_bg,
  title,
  content1,
  content2,
  img_author,
  name_author,
  date,
}) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            alt={alt_comment}
            height="140"
            image={image_bg}
            title={title}
          />
          <CardContentCmp
            content1={content1}
            content2={content2}
          ></CardContentCmp>
        </CardActionArea>
        <CardActionsCmp
          actionCmp={classes.cardActions}
          authorCmp={classes.author}
          img_author={img_author}
          name={name_author}
          date={date}
        ></CardActionsCmp>
      </Card>
    </Grid>
  );
}

export default cardCmp;
