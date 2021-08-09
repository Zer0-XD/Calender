import React, { useEffect } from 'react';
import EventItem from './EventItem';
import { useSelector, useDispatch } from 'react-redux';
import { geteventsAsync } from '../redux/eventSlice';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

  
  const EventList = (props) => {
      const dispatch = useDispatch();
      const events = useSelector((state) => state.events);
      
      const selectedDate = props.selectedDate;
      
    //   console.log("event"+ events);
      
    const classes = useStyles();


	// useEffect(() => {
	// 	dispatch(getevents());
	// }, [dispatch]);

	return (

        <List >
         	{events.map((event) => (
		 		<EventItem id={event.id} title={event.title} time={event.time} test={selectedDate} date = {event.date} />                 
		 	))}
        </List>
        
	);
};

export default EventList;