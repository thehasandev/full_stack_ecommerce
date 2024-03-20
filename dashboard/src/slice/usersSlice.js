import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: null,
  },
  reducers: {
    activeuser: (state, action) => {
     state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { activeuser } = userSlice.actions

export default userSlice.reducer