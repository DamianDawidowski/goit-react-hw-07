import axios from 'axios'; 
import { createAsyncThunk} from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://64a57b0600c3559aa9bfc7c3.mockapi.io/`; 

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.error(error);
   handleRejected(); 
  }
});

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number}) => {
    try { 
      const { data } = await axios.post('/contacts', { name, number });  
     return data; 
    } catch (error) {
      console.error(error);
      handleRejected(); 
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      thunkAPI.dispatch(fetchContacts());
      return response.data;
    } catch (error) {
      console.error(error);
      handleRejected(); 
    }
  }
);

export const handleRejected = (state, action) => { 
    state.error = action.payload;
  }
