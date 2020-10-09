import React from "react";
import Typography from "@material-ui/core/Typography";
//import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Pagination from "@material-ui/lab/Pagination";
import {
  Container,
  Grid,
  Box,
  /*Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Avatar,*/
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./components/appBar.js";
import Hero from "./components/hero.js";
import CardCmp from "./components/card.js";

//import Typogra from "./components/typography.js";

const cardListData = [
  {
    alt: "Contemplative Reptile",
    id: 1,
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: "Contemplative Reptile",
    content1: "React useContext",
    content2:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    img_author:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    name: "David Watts",
    date: "Oct 8, 2020",
  },
  {
    alt: "Contemplative Reptile",
    id: 2,
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: "Contemplative Reptile",
    content1: "React useContext",
    content2:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    img_author:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    name: "David Watts",
    date: "Oct 8, 2020",
  },
  {
    alt: "Contemplative Reptile",
    id: 3,
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: "Contemplative Reptile",
    content1: "React useContext",
    content2:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    img_author:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    name: "David Watts",
    date: "Oct 8, 2020",
  },
  {
    alt: "Contemplative Reptile",
    id: 4,
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: "Contemplative Reptile",
    content1: "React useContext",
    content2:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    img_author:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    name: "David Watts",
    date: "Oct 8, 2020",
  },
];

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

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <NavBar nameCmp={classes.appBar}></NavBar>
      <Hero nameCmp={classes.hero}></Hero>
      <Container maxWidth="lg" className={classes.blogContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          {cardListData.map((cardData) => (
            <CardCmp key={cardData.id} {...cardData} />
          ))}
          {/*<Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  title="Contemplative Reptile"
                />
                <CardContentCmp
                  content1={"React useContext"}
                  content2={`Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica`}
                ></CardContentCmp>
              </CardActionArea>
              <CardActionsCmp
                actionCmp={classes.cardActions}
                authorCmp={classes.author}
                img_author={
                  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                }
                name={"David Watts"}
                date={"Oct 8, 2020"}
              ></CardActionsCmp>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="https://images.unsplash.com/photo-1508921234172-b68ed335b3e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  title="Contemplative Reptile"
                />
                <CardContentCmp
                  content1={"React useContext"}
                  content2={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`}
                ></CardContentCmp>
              </CardActionArea>
              <CardActionsCmp
                actionCmp={classes.cardActions}
                authorCmp={classes.author}
                img_author={
                  "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                }
                name={"Martha Janes"}
                date={"Apr 8, 2020"}
              ></CardActionsCmp>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="https://images.unsplash.com/photo-1565843714144-d5a3292ae82d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
                  title="Contemplative Reptile"
                />
                <CardContentCmp
                  content1={"React useContext"}
                  content2={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`}
                ></CardContentCmp>
              </CardActionArea>
              <CardActionsCmp
                actionCmp={classes.cardActions}
                authorCmp={classes.author}
                img_author={
                  "https://images.unsplash.com/photo-1575632312417-71da8ed4992d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                }
                name={"Laura Gil"}
                date={"Jun 20, 2020"}
              ></CardActionsCmp>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  title="Contemplative Reptile"
                />
                <CardContentCmp
                  content1={"React useContext"}
                  content2={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`}
                ></CardContentCmp>
              </CardActionArea>
              <CardActionsCmp
                actionCmp={classes.cardActions}
                authorCmp={classes.author}
                img_author={
                  "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                }
                name={"Laura Gil"}
                date={"Jun 20, 2020"}
              ></CardActionsCmp>
            </Card>
          </Grid>*/}
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}

export default App;
