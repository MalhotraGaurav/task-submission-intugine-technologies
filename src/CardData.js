import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './CardData.css';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function CardData({DEL,OOD,INT}) {
    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    return (
        <div className="card">
        <Card style={{backgroundColor:"lightBlue",margin:"20px"}} className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            DEL
          </Typography>
          <Typography variant="h5" component="h2">
            {DEL}
          </Typography>
        </CardContent>
      </Card>
      <Card style={{backgroundColor:"lightBlue",margin:"20px"}}className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            OOD
          </Typography>
          <Typography variant="h5" component="h2">
            {OOD}
          </Typography>
        </CardContent>
      </Card>
      <Card style={{backgroundColor:"lightblue",margin:"20px"}} className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            INT
          </Typography>
          <Typography variant="h5" component="h2">
            {INT}
          </Typography>
        </CardContent>
      </Card>

       </div>
    )
}

export default CardData
