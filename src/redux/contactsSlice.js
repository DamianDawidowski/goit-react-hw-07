import { createSlice} from '@reduxjs/toolkit';
import { addNewContact, deleteContact, fetchContacts } from './operations';
 
export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [], 
    error: null,
  },
    reducers: {}, 
extraReducers:{ 
  [fetchContacts.fulfilled] (state, action) { 
    state.error = null;
    state.contacts = action.payload;
  }, 
  [addNewContact.fulfilled] (state, action) { 
    state.error = null;
    state.contacts.push(action.payload);
  },
  
  [deleteContact.fulfilled] (state, action) { 
    state.error = null;
    state.contacts = state.contacts.filter(item => item.id !== action.payload);
  }, 
},
})
 
const { reducer: contactReducer } = contactSlice;
export default contactReducer;