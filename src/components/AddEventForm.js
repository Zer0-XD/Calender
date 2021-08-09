import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEvent } from '../redux/eventSlice';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { TimePicker } from "@material-ui/pickers";

const AddEventForm = (props) => {
	const [value, setValue] = useState();
    const [time, setTime] = useState(new Date());

    const dateSelected = props.dateSelected;

    const dispatch = useDispatch();

    const stylefield = {
        marginTop: '20px',
        marginBottom: '20px',
    };

	const onSubmit = (event) => {
		event.preventDefault();
		console.log('user entered: ' + value);
        if(value)
        {
            dispatch(
                addEvent({
                    title : value,
                    date : dateSelected,
               })
                )
        }
	};

	return (
		<form onSubmit={onSubmit} className='form' style={{alignItems:'center'},{paddingLeft:'13vw'}}>
			
            <TextField
                    style = {stylefield}
                    id="outlined-secondary"
                    label="Event Title.."
                    variant="outlined"
                    color="primary"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            <br></br>
                <TimePicker
                    showTodayButton
                    todayLabel="now"
                    label="Set Time"
                    // value={time}
                    minutesStep={5}
                    // onChange={(event) => setTime(event.target.time)}
                />
                    
            <input hidden value={dateSelected}/>
                <br></br>
			<Button type='submit' color="primary" variant="contained" style={stylefield}>
				Submit
			</Button>
		</form>
	);
};

export default AddEventForm;