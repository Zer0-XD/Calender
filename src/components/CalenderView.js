import React, { useState } from "react";
import { Paper, Button } from "@material-ui/core";
import { useStaticState, ClockView, Calendar } from "@material-ui/pickers";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Moment from "moment";
import { makeStyles } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';
import EventList from "./EventList";
import AddEventForm from "./AddEventForm";
import { Height } from "@material-ui/icons";

import ListIcon from '@material-ui/icons/List';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300,
    },
   
      title: {
        margin: theme.spacing(4, 0, 2),
      },
      root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      }
  }));
  

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});


function CalenderView() {
    const classes = useStyles();
  const [value, handleDateChange] = useState(new Date());

  const [open, setOpen,] = React.useState(false);
  const [openList, setOpenList] = useState(false);

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);



  // you can past mostly all available props, like minDate, maxDate, autoOk and so on
  const { pickerProps} = useStaticState({
    value,
    onChange: handleDateChange,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClickList = () => {
    setOpenList(true);
  };
  

  const handleClose = () => {
    setOpen(false);
    setOpenList(false);
  };
  
  return (
    <>
      <div>
        <Paper style={{ overflow: "hidden" }}>
          <Calendar {...pickerProps} />
        </Paper>

        
        <div className="container" style={{marginTop:'25vw'}}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{marginRight:'5vw'},{borderRadius:'20px'}}>
                <AddIcon />
            </Button>
            
            <Button variant="outlined" color="secondary" onClick={handleClickList} style={{borderRadius:'20px'}}>
                <ListIcon />
            </Button>
        </div>

        {/* Add Events */}
        <Dialog
        style={{maxHeight:'85vh'}}
        open={open}
        fullWidth
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="customized-dialog-title" aria-labelledby="customized-dialog-title" onClose={handleClose}>{"Add Events on "+ Moment(value.toJSON()).format('DD MMM , YYYY') +'' }</DialogTitle>

        <DialogContent>
          
          <AddEventForm selectedDate={value} />            
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    

        {/* View List  */}
        <Dialog
        style={{maxHeight:'85vh'}}
        open={openList}
        fullWidth
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{background:'#ffdfba !important'},{color:"grey"}} id="customized-dialog-title" aria-labelledby="customized-dialog-title" onClose={handleClose}>{"Events on "+ Moment(value.toJSON()).format('DD MMM , YYYY') +'' }</DialogTitle>

        <DialogContent style={{background:'#ffdfba'}}>
            <div className={classes.demo} style={{marginTop:"20px"}}>
                <EventList selectedDate={value}/>
          </div>

        </DialogContent>
        <DialogActions style={{background:'#ffdfba'}}>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    
   
      </div>

    </>
  );
}

export default CalenderView;
