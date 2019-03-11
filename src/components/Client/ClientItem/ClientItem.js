import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function ClientItem(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.project.name}
          </Typography>
          <Typography component="p">
           {props.project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={props.project.github} target="_blank"><Button size="small" color="primary" >
          GitHub
        </Button></a>
        <a href={props.project.web} target="_blank"><Button size="small" color="primary" >
          Web Page
        </Button></a>
      </CardActions>
    </Card>
  );
}

ClientItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

  const mapReduxToProps = (reduxState) => {
      return reduxState;
  };
  
  export default connect(mapReduxToProps)(withStyles(styles)(ClientItem));