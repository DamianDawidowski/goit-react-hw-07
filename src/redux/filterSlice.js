import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    setFilter: (state, action) => (state = action.payload),
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;