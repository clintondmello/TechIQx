import React, { useEffect, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Container,
  AppBar,
  Typography,
  Grid,
  Grow,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    document.body.classList.add(classes.body);
  }, [dispatch]);

  return (
    <Container className={classes.mainContainer}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" align="center" className={classes.heading}>
            Clinton Dmello
          </Typography>
        </Toolbar>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch">
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}></Posts>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
