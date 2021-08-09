import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
	name : 'events',
	initialState : [
		{id : 1 , title : 'test one' ,time: "12:00 AM", completed: false},
		{id : 2 , title : 'test two' ,time: "12:00 AM", completed: false}
	],
	reducers:{
		addEvent: (state, action ) => {
			const newEvent = {
				id : Math.random(),
				date : action.payload.date,
				title: action.payload.title,
				time : action.payload.time,
				completed: false

			};
			state.push(newEvent)
		},
		deleteEvent : (state, action) => {
			return state.filter ((event) => event.id != action.payload.id);
		}
	}
});

export const { addEvent , deleteEvent} = eventSlice.actions;

export default eventSlice.reducer; 