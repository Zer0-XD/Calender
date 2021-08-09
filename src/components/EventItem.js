import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../redux/eventSlice';
import Moment from 'moment';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';


const EventItem = (props, id, title, date, completed ) => {
	const dispatch = useDispatch();

    // console.log('date '+ props.date );
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);

    const styleItem={
        borderRadius: '15px',
        marginTop: '10px',
        backgroundColor: "#" + `${randomColor}`,

    }

    const selectedDate =props.test;

    const dateShort = Moment(selectedDate.toJSON()).format('DD MMM , YYYY')


	const handleDeleteClick = () => {
		dispatch(deleteEvent({ id :id }));
	};

	return (
		<ListItem className={`list-group-item ${completed && 'list-group-item-success'}`} style={styleItem}>
            <ListItemText primary={props.title} secondary={props.time} />
			<ListItemSecondaryAction>
            <Button color="primary" onClick={handleDeleteClick}>
              <IconButton edge="end" aria-label="delete" color="secondary">
                        <DeleteIcon />
              </IconButton>
            </Button>
            </ListItemSecondaryAction>
		</ListItem>
	);
};

export default EventItem;