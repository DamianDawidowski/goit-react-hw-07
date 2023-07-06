import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios'; 

axios.defaults.baseURL = `https://64a57b0600c3559aa9bfc7c3.mockapi.io/`; 

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.error(error);
    return error;
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
      return error;
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
      return thunkAPI.rejectWithValue(error);
    }
  }
);
 
export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [], 
    error: null,
  },
    reducers: {}, 
extraReducers: builder => { 
  builder.addCase(fetchContacts.fulfilled, (state, action) => { 
    state.error = null;
    state.contacts = action.payload;
  });
  builder.addCase(fetchContacts.rejected, (state, action) => { 
    state.error = action.payload;
  }); 
  builder.addCase(addNewContact.fulfilled, (state, action) => { 
    state.error = null;
    state.contacts.push(action.payload);
  });
  builder.addCase(addNewContact.rejected, (state, action) => { 
    state.error = action.payload;
  }); 
  builder.addCase(deleteContact.fulfilled, (state, action) => { 
    state.error = null;
    state.contacts = state.contacts.filter(item => item.id !== action.payload);
  });
  builder.addCase(deleteContact.rejected, (state, action) => { 
    state.error = action.payload;
  });
},
})
 
const { reducer: contactReducer } = contactSlice;
export default contactReducer;